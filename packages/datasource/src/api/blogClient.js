import axios from 'axios';
import { dispatchApiError } from './events';

const isDispatchGlobalApiError = (status) => {
  return ![400, 409, 428].includes(status);
};

const blogClient = axios.create({
  baseURL: (process.env.NEXT_PUBLIC_API_BASE_URL ?? '') + '/blog',
  withCredentials: true,
  headers: {
    accept: 'application/json',
  },
});

blogClient.interceptors.response.use(
  ({ data }) => {
    if (typeof data?.page?.number === 'number') {
      data.page.number += 1;
    }
    return data;
  },
  (err) => {
    const { config, response } = err;

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

    return Promise.reject(isReturnErrorResponse ? response : data);
  }
);

export default blogClient;
