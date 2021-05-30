import React from 'react';
import styled from 'styled-components';
import { Avatar as AntAvatar, DatePicker as AntDatePicker } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { colors } from '@tidb-community/ui';

export const DatePicker = styled(AntDatePicker)`
  width: 100%;
`;

export const Avatar = styled(AntAvatar).attrs({
  shape: 'square',
  size: 140,
  icon: <UserOutlined />,
})`
  background: ${colors.T2};
`;
