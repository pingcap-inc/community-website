import { ApiRequestFunction } from '../../index';

type MembersParams = {
  uid: string;
};

export const members: ApiRequestFunction<MembersParams, void>;
