export * as orgs from './orgs';
export * as events from './events';
export { me } from './me';

export type ApiResponse<T, Detail> = {
  detail: Detail;
} & T;

export interface ApiRequestFunction<Params, ResponseData, ResponseDetails = string> {
  (params: Params): Promise<ApiResponse<ResponseData, ResponseDetails>>;
}
