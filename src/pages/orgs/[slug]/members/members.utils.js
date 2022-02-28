import * as R from 'ramda';
import React from 'react';

import * as Styled from './members.styled';
import RoleDropdown from './roleDropdown';
import { ROLE_NAMES } from '~/constants';
import { TYPES } from './members.constants';

export const getDataSource = ({ membersResp = {}, meData = {}, onDelete, onRoleChange, isAdmin }) => {
  const { data = [] } = membersResp;
  const { id: meId } = meData;

  return data
    .filter((item) => item.type !== TYPES.INVITED)
    .map((item) => {
      const { id, username, role } = item;
      const isMyself = id === meId;

      const onRoleMenuClick = (e) =>
        onRoleChange({
          id,
          role: e.key,
        });

      const roleName = ROLE_NAMES[role];

      const roleDropdownProps = {
        onRoleMenuClick,
        role,
        roleName,
      };

      return {
        key: id,
        ...R.pick(['email'], item),
        username: (
          <Styled.Name>
            {username}
            {isMyself && <span>你自己</span>}
          </Styled.Name>
        ),
        role: isAdmin ? <RoleDropdown {...roleDropdownProps} /> : roleName,
        operation:
          isAdmin || isMyself ? (
            <Styled.Delete onClick={() => onDelete({ id, isMyself })}>{isMyself ? '退出' : '删除'}</Styled.Delete>
          ) : (
            <Styled.DisabledDelete>删除</Styled.DisabledDelete>
          ),
      };
    });
};
