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
