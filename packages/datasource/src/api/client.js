import Cookie from 'js-cookie';
import axios from 'axios';
import { utils } from '@/packages/common';

import { dispatchApiError } from './events';

const shouldDispatchGlobalApiError = (status) => {
  return ![400, 409, 428].includes(status);
};

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL ?? '',
  withCredentials: true,
});

client.interceptors.request.use((config) => {
  const csrftoken = Cookie.get('csrftoken');

  config.headers = {
    ...config.headers,
    // TODO: Once we support i18n, the `Accept-Language` should be retrieved from
    // a locale code provided by the i18n libarry (Maybe from a cookie or localStorage).
    'Accept-Language': 'zh-hans',
  };

  if (csrftoken) {
    config.headers['X-CSRFTOKEN'] = csrftoken;
  }

  return config;
});

client.interceptors.response.use(
  ({ data }) => data,
  (err) => {
    const { config, response } = err;

    // Some errors may not have response, like the timeout error
    if (!response) {
      dispatchApiError(err);
      return Promise.reject(err);
    }

    const { data, status } = response;

    if (typeof window !== 'undefined') {
      let shouldDispatch = false;
      const { shouldDispatchApiError } = config;

      if (shouldDispatchApiError?.({ data, status })) {
        shouldDispatch = true;
      } else if (!shouldDispatchApiError && shouldDispatchGlobalApiError(status)) {
        shouldDispatch = true;
      }

      if (shouldDispatch) {
        dispatchApiError(response);
      }
    }

    return Promise.reject(config.isReturnErrorResponse ? response : data);
  }
);

if (process.env.NEXT_PUBLIC_RECAPTCHA_KEY) {
  const getCaptcha = (config) => utils.form.getCaptchaToken(process.env.NEXT_PUBLIC_RECAPTCHA_KEY, config.path);
  client.interceptors.request.use(utils.axios.createCaptchaInterceptor('re_token_v3', getCaptcha));
}

export default client;
