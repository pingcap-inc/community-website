import { AxiosInstance } from 'axios';

export * as events from './events';
export * as tug from './tug';
export * as subscribe from './subscribe';
export * as blog from './blog';
export * as asktug from './asktug';
export * as points from './points';
export { me } from './me';
export * as cms from './cms';
export * as orgs from './orgs';

export type ApiResponse<T, Detail> = {
  detail: Detail;
} & T;

export interface ApiRequestFunction<Params, ResponseData, ResponseDetails = string> {
  (params: Params): Promise<ApiResponse<ResponseData, ResponseDetails>>;
}

export interface PageData<T, Key extends string> {
  data: {
    meta: {
      page: number;
      page_size: number;
    } & Record<`${Key}_count`, number>;
  } & Record<Key, T[]>;
}

interface StrapiClientProps {
  baseUrl?: string;
  email?: string;
  password?: string;
}

export const client: AxiosInstance;
export const blogClient: AxiosInstance;
export const nextClient: AxiosInstance;
export const cmsProxyClient: AxiosInstance;
export const initStrapiClient: (props?: StrapiClientProps) => AxiosInstance;
