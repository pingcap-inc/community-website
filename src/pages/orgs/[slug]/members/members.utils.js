import * as R from 'ramda';
import React from 'react';

import * as Styled from './members.styled';
import { ROLE_NAMES } from './members.constants';

export const getDataSource = ({ membersResp = {}, meResp = {} }) => {
  const { data = [] } = membersResp;
  const meId = meResp.data?.id;

  return data.map((item) => {
    const { id, name } = item;
    const isMyself = id === meId;

    return {
      key: id,
      ...R.pick(['username', 'email'], item),
      name: (
        <Styled.Name>
          {name}
          {isMyself && <span>你自己</span>}
        </Styled.Name>
      ),
      role: ROLE_NAMES[item.role],
      operation: <Styled.Delete>{isMyself ? '退出' : '删除'}</Styled.Delete>,
    };
  });
};
