import { ApiRequestFunction } from '../../index';

type MembersParams = {
  slug: string;
};

export const members: ApiRequestFunction<MembersParams, void>;
