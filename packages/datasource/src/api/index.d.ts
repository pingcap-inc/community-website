export * as events from './events';
export * as orgs from './orgs';
export * as tug from './tug';
export * as subscribe from './subscribe';
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
