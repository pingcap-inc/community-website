import { AxiosInstance } from 'axios';

export * as events from './events';
export * as orgs from './orgs';
export * as tug from './tug';
export * as subscribe from './subscribe';
export * as blog from './blog';
export { me } from './me';

export type ApiResponse<T, Detail> = {
  detail: Detail;
} & T;

export interface ApiRequestFunction<Params, ResponseData, ResponseDetails = string> {
  (params: Params): Promise<ApiResponse<ResponseData, ResponseDetails>>;
}

export type PageData<T, Key> = {
  data: {
    meta: {
      [`${Key}_count`]: number;
      page: number;
      page_size: number;
    };
    [Key]: T[];
  };
};

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
