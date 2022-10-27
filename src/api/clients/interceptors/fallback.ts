import { AxiosError, AxiosInstance } from 'axios';
import * as Sentry from '@sentry/browser';

function isAxiosError(error: unknown): error is AxiosError {
  return error && typeof error === 'object' && (error as AxiosError).isAxiosError;
}

export function addFallbackDataInterceptors(client: AxiosInstance) {
  client.interceptors.response.use(undefined, (error) => {
    if (!isAxiosError(error)) {
      return Promise.reject(error);
    }
    if (!error.config.fallbackResponse) {
      return Promise.reject(error);
    }
    console.error(`Error occurred in http request, returns fallback response instead.`, error);
    Sentry.captureException(error);

    return Promise.resolve(error.config.fallbackResponse);
  });
}
