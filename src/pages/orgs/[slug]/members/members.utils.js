import * as R from 'ramda';
import React from 'react';
import { CheckOutlined, DownOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';

import * as Styled from './members.styled';
import { ROLE_NAMES } from './members.constants';

const genRoleMenu = ({ onRoleChange, role }) => (
  <Styled.RoleMenu onClick={onRoleChange} selectedKeys={[role]}>
    <Menu.Item key="admin">
      <h3>管理员</h3>
      <p>可管理成语，申请企业认证</p>
      <CheckOutlined />
    </Menu.Item>
    <Menu.Item key="member">
      <h3>成员</h3>
      <p>享受所有企业权益</p>
      <CheckOutlined />
    </Menu.Item>
  </Styled.RoleMenu>
);

export const getDataSource = ({ membersResp = {}, meResp = {}, onDelete, onRoleChange }) => {
  const { data = [] } = membersResp;
  const meId = meResp.data?.id;

  return data.map((item) => {
    const { id, name, role } = item;
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
      role: (
        <Dropdown overlay={genRoleMenu({ onRoleChange, role })}>
          <Styled.Role>
            {ROLE_NAMES[role]} <DownOutlined />
          </Styled.Role>
        </Dropdown>
      ),
      operation: <Styled.Delete onClick={(e) => onDelete(id)}>{isMyself ? '退出' : '删除'}</Styled.Delete>,
    };
  });
};
