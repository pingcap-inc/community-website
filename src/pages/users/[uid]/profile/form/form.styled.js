import React from 'react';
import styled from 'styled-components';
import { Avatar as AntAvatar } from 'antd';
import { DatePicker as _DataPicker } from 'formik-antd';
import { UserOutlined } from '@ant-design/icons';
import { colors, mixins } from '@tidb-community/ui';

export const UserName = styled.div`
  ${mixins.flexVerticalCenter()};

  .anticon {
    margin-left: 0.5em;
  }
`;

export const DatePicker = styled(_DataPicker)`
  width: 100%;
`;

export const Avatar = styled(AntAvatar).attrs({
  shape: 'square',
  size: 140,
  icon: <UserOutlined />,
})`
  background: ${colors.T2};
`;
