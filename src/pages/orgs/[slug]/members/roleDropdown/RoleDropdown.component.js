import React from 'react';
import { Menu, Dropdown } from 'antd';
import { CheckOutlined, DownOutlined } from '@ant-design/icons';

import * as Styled from './roleDropdown.styled';
import { ROLE_KEYS, ROLE_NAMES } from '../members.constants';

const genRoleMenu = ({ onRoleMenuClick, role }) => (
  <Styled.RoleMenu onClick={onRoleMenuClick} selectedKeys={[role]}>
    <Menu.Item key={ROLE_KEYS.ADMIN}>
      <h3>{ROLE_NAMES[ROLE_KEYS.ADMIN]}</h3>
      <p>可管理成语，申请企业认证</p>
      <CheckOutlined />
    </Menu.Item>
    <Menu.Item key={ROLE_KEYS.MEMBER}>
      <h3>{ROLE_NAMES[ROLE_KEYS.MEMBER]}</h3>
      <p>享受所有企业权益</p>
      <CheckOutlined />
    </Menu.Item>
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
