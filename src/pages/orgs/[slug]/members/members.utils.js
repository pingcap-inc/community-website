import * as R from 'ramda';

import { ROLE_NAMES } from './members.constants';

export const getDataSource = ({ membersResp = {}, me }) => {
  const { data = [] } = membersResp;

  return data.map((item) => ({
    key: item.id,
    ...R.pick(['id', 'name', 'username', 'email'], item),
    role: ROLE_NAMES[item.role],
    operation: me.id === item.id ? '退出' : '删除',
  }));
};
