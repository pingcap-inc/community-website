import { ApiRequestFunction } from '../index';

type Gender = 0 | 1;

type Data = {
  username: string;
  avatar_url: string;
  username_last_modified_at?: string;
  bio?: string;
  name?: string;
  date_of_birth?: string;
  address?: string;
  company_name?: string;
  gender?: Gender;
  job_title?: string;
};

export const profile: ApiRequestFunction<void, { data: Data }>;
