import { AxiosInstance, AxiosResponse } from 'axios';
import _blogClient from './blogClient';
import _client from './client';
import _nextClient from './nextClient';

declare module 'axios' {
  export interface AxiosRequestConfig {
    isDispatchApiError?(res: AxiosResponse): boolean;
    isReturnErrorResponse?: boolean;
  }
}

export { default as asktugClient } from './asktugClient';
export const blogClient: AxiosInstance = _blogClient;
export const nextClient: AxiosInstance = _nextClient;
export const client: AxiosInstance = _client;
