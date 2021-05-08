import { ApiRequestFunction } from '../../index';

interface ResponseInviteParams {
  id: number;
  action: 'accept' | 'refuse';
}

export const responseInvite: ApiRequestFunction<ResponseInviteParams, void>;
