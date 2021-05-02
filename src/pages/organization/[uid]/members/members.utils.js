import * as R from 'ramda';

import { ROLE_NAMES } from './members.constants';

export const getDataSource = (membersResp = {}) => {
  const { data = [] } = membersResp;

  return data.map((item) => ({
    key: item.id,
    ...R.pick(['id', 'name', 'username', 'email'], item),
    role: ROLE_NAMES[item.role],
    operation: '删除',
  }));
};
