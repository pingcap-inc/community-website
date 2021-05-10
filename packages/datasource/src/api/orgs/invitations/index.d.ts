import { ApiRequestFunction } from '../../index';

interface ResponseInvitationParams {
  id: number;
  action: 'accept' | 'refuse';
}

export const responseInvitation: ApiRequestFunction<ResponseInvitationParams, void>;
