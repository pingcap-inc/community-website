import React from 'react';
import { CheckOutlined, DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';

import * as Styled from './roleDropdown.styled';
import { ROLE_KEYS, ROLE_NAMES } from '~/constants';
import { RoleActionMenu } from './RoleActionMenu.component';

const genRoleMenu = ({ onRoleMenuClick, role }) => (
  <Styled.RoleMenu action={onRoleMenuClick} selectedKeys={[role]}>
    <RoleActionMenu.Item key={ROLE_KEYS.ADMIN}>
      <h3>{ROLE_NAMES[ROLE_KEYS.ADMIN]}</h3>
      <p>可管理成员，申请企业认证</p>
      <CheckOutlined />
    </RoleActionMenu.Item>
    <RoleActionMenu.Item key={ROLE_KEYS.MEMBER}>
      <h3>{ROLE_NAMES[ROLE_KEYS.MEMBER]}</h3>
      <p>享受所有企业权益</p>
      <CheckOutlined />
    </RoleActionMenu.Item>
  </Styled.RoleMenu>
);

const RoleDropdown = ({ roleName, role, onRoleMenuClick }) => (
  <Dropdown overlay={genRoleMenu({ onRoleMenuClick, role })} trigger="click">
    <Styled.Role>
      {roleName}
      <DownOutlined />
    </Styled.Role>
  </Dropdown>
);

export default RoleDropdown;
