import { ApiRequestFunction } from '../../index';

type MembersParams = {
  slug: string;
};

type MemberData = {
  name: string;
  username: string;
  email: string;
  id: number;
  role: string;
};

export const members: ApiRequestFunction<MembersParams, { data: MemberData[] }>;
