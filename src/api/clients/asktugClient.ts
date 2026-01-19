import axios from 'axios';
import { dispatchApiError } from './events';

const isDispatchGlobalApiError = (status) => {
  return ![400, 409, 428].includes(status);
};

const asktugClient = axios.create({
  baseURL: (process.env.NEXT_PUBLIC_API_BASE_URL ?? '') + '/forum',
  withCredentials: true,
  headers: {
    accept: 'application/json',
  },
  isDispatchApiError({ status }) {
    return status !== 404;
  },
});
// axios.interceptors.request.use((config) => {
//   console.log('request params：', config);
//   return config;
// }, error => {
//   return Promise.reject(error);
// });
asktugClient.interceptors.response.use(
  ({ data }) => {
    return data;
  },
  (err) => {
    const { config, response } = err;

    console.error(response?.status ?? 'unknown', config.url);

    // Some errors may not have response, like the timeout error
    if (!response) {
      dispatchApiError(err);
      return Promise.reject(err);
    }

    const { data, status } = response;
    const { isDispatchApiError, isReturnErrorResponse } = config;

    if (typeof window !== 'undefined') {
      let isDispatch = false;

      if (isDispatchApiError?.({ data, status })) {
        isDispatch = true;
      } else if (!isDispatchApiError && isDispatchGlobalApiError(status)) {
        isDispatch = true;
      }

      if (isDispatch) {
        dispatchApiError(response);
      }
    }

    // TODO: SSR requests does not contains cookie info
    if (data?.error_type === 'invalid_access') {
      return Promise.resolve(config.fallbackResponse);
    }

    return Promise.reject(isReturnErrorResponse ? response : data ?? err);
  }
);

export default asktugClient;
