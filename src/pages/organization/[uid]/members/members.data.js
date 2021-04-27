import React from 'react';

import * as Styled from './members.styled';

export const dataSource = [
  {
    key: '1',
    name: 'Maggie',
    username: 'liman124',
    email: 'liman@pingcap.com',
    role: '管理员',
    operation: '退出',
  },
  {
    key: '2',
    name: 'Nick',
    username: 'hustKick',
    email: 'qiwei@pingcap.com',
    role: '成员',
    operation: '删除',
  },
  {
    key: '3',
    name: 'Matt',
    username: 'hi_matt',
    email: 'matt@pingcap.com',
    role: '成员',
    operation: '删除',
  },
];

export const columns = [
  {
    title: '昵称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: '角色',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    render: (label) => <Styled.Delete>{label}</Styled.Delete>,
  },
];
