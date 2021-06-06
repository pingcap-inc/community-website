import Axios from 'axios';
import { utils } from '@tidb-community/common';

const client = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  headers: {
    // TODO: support i18n
    'Accept-Language': 'zh-hans',
  },
});

export const callbackClient = Axios.create({
  withCredentials: true,
});

const { form: formUtils, axios: axiosUtils } = utils;

// the account site often needs to check captcha, so we put the get captcha logic in client.
// any api demands captcha just needs to declare a param 're_token_v3' and it will automatically injected into
// request body.
// this should only working for requests with body.
const getCaptcha = () => formUtils.getCaptchaToken(import.meta.env.VITE_RE_CAPTCHA_SITE_KEY);

client.interceptors.request.use(axiosUtils.createCaptchaInterceptor('re_token_v3', getCaptcha));

client.interceptors.request.use(axiosUtils.createCookieCopyInterceptor('csrftoken', 'X-CSRFTOKEN'));

client.interceptors.response.use(
  ({ data }) => {
    return data;
  },
  (err) => {
    if (err.response) {
      const { status, data } = err.response;
      if (status === 400) {
        return Promise.reject(data);
      }
      return Promise.reject(err);
    } else {
      return Promise.reject(err);
    }
  }
);

// we don't care about login callback errors.
callbackClient.interceptors.response.use(undefined, () => {});

export default client;
