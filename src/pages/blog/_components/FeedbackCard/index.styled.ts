import styled from 'styled-components';
import { mixins, colors } from '@tidb-community/ui';
import { Card as AntdCard } from 'antd';
import { borderRadius } from '../common.styled';

export const Container = styled.div`
  ${mixins.showOnDesktop()}
  ${borderRadius}
  margin-top: 1rem;
  .ant-card-head a {
    color: ${colors.B1};
  }
`;

export const Card = styled(AntdCard)`
  ${borderRadius}
`;
