import React from 'react';
import styled from 'styled-components';
import { Avatar as AntAvatar, DatePicker as AntDatePicker } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { colors, mixins } from '@tidb-community/ui';

export const UserName = styled.div`
  ${mixins.flexVerticalCenter()};

  .anticon {
    margin-left: 0.5em;
  }
`;

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
