import { AxiosResponse } from 'axios';

export * as org from './org';
export module constants {
  export const SUCCESS: string;
  export const SUCCESS_NOT_USED: string;
  export const ERR_PARAMS_WRONG: string;
}

export type ApiResponse<T, Detail> = {
  detail: Detail,
} & T

export interface ApiRequestFunction<Params, ResponseData, ResponseDetails = Constants['SUCCESS']> {
  (params: Params): Promise<ApiResponse<ResponseData, ResponseDetails>>
}

interface GlobalApiErrorHandler {
  (response: AxiosResponse): any
}

export function initApi (globalErrorHandler: GlobalApiErrorHandler);

export const GLOBAL_ERROR_HANDLED: symbol;
