import { ApiRequestFunction } from '../../index';

type CheckNameParams = {
  name: string
}

export const checkName: ApiRequestFunction<CheckNameParams, void>;
