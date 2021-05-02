import { ApiRequestFunction } from '../../index';

export type CompanyInfo = {
  name: string;
  credit_code: string;
  base: string;
};

type SearchCompanyParams = {
  word: string;
};

export const searchCompany: ApiRequestFunction<SearchCompanyParams, { data: CompanyInfo[] }>;
