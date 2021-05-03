import * as R from 'ramda';

import { ROLE_NAMES } from './members.constants';

export const getDataSource = ({ membersResp = {}, meResp = {} }) => {
  const { data = [] } = membersResp;
  const meId = meResp.data?.id;

  return data.map((item) => ({
    key: item.id,
    ...R.pick(['id', 'name', 'username', 'email'], item),
    role: ROLE_NAMES[item.role],
    operation: item.id === meId ? '退出' : '删除',
  }));
};
