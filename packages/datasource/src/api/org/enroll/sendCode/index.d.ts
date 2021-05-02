import { ApiRequestFunction } from '../../../index';

type SendCodeParams = {
  email: string;
};

export const sendCode: ApiRequestFunction<SendCodeParams, void>;
