import Cookie from 'js-cookie';
import axios from 'axios';

import { dispatchApiError } from './events';

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL ?? '',
});

client.interceptors.request.use((config) => {
  const { method, headers } = config;

  if (/get/i.test(method)) {
    const csrftoken = Cookie.get('csrftoken');

    if (csrftoken) {
      config.headers = {
        ...headers,
      };
    }
  }

  return config;
});

client.interceptors.response.use(
  ({ data }) => data,
  (err) => {
    const { config, response } = err;

    // Some errors may not have response, like the timeout error
    if (!response) {
      return Promise.reject(err);
    }

    const { data, status } = response;

    if (!config.isDispatchApiErrorDisabled && status !== 400 && typeof window !== 'undefined') {
      dispatchApiError(response);
    }

    return Promise.reject(config.isReturnErrorResponse ? response : data);
  }
);

export default client;
