import { AxiosResponse } from 'axios';

export module Constants {
  export const SUCCESS: string;
  export const SUCCESS_NOT_USED: string;
  export const ERR_PARAMS_WRONG: string;
}

export type ApiResponse<T, Detail> = {
  detail: Detail,
  data: T,
}

export interface ApiRequestFunction<Params, ResponseData, ResponseDetails = Constants['SUCCESS']> {
  (params: Params): Promise<ApiResponse<ResponseData, ResponseDetails>>
}

interface GlobalApiErrorHandler {
  (response: AxiosResponse): any
}

export function initApi (globalErrorHandler: GlobalApiErrorHandler);

export const GLOBAL_ERROR_HANDLED: symbol;

export * as org from './org';
