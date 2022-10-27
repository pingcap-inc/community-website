import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
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
    console.error(
      `Error occurred in http request ${error.response?.request.path}, returns fallback response instead.`,
      error.message
    );
    // The error was not thrown, so sentry needs to capture it manually.
    Sentry.captureException(error);

    return Promise.resolve({
      ...error.response,
      data: error.config.fallbackResponse,
    } as AxiosResponse);
  });
}
