import { AxiosInstance, AxiosResponse } from 'axios';
import _blogClient from './blogClient';
import _client from './client';
import _nextClient from './nextClient';

declare module 'axios' {
  export interface AxiosRequestConfig<D> {
    isDispatchApiError?(res: AxiosResponse): boolean;
    isReturnErrorResponse?: boolean;

    /**
     * Prevent breaking pages while some error occurred.
     * If the fallbackResponse is used, the error would be sent to sentry.
     *
     * @see import('./interceptors/fallback').addFallbackDataInterceptors
     */
    fallbackResponse?: D;
  }
}

export { default as asktugClient } from './asktugClient';
export const blogClient: AxiosInstance = _blogClient;
export const nextClient: AxiosInstance = _nextClient;
export const client: AxiosInstance = _client;
