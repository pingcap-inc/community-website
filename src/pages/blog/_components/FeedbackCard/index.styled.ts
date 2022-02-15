import styled from 'styled-components';
import { mixins } from '@tidb-community/ui';
import { Card as AntdCard } from 'antd';
import { borderRadius } from '../common.styled';

export const Container = styled.div`
  ${mixins.showOnDesktop()};
  ${borderRadius};
  ${mixins.anchor()};
  margin-top: 1rem;
`;

//export const Header = styled.div`
//  font-size: 14px;
//`;

export const Card = styled(AntdCard)`
  ${borderRadius};
  ${mixins.anchor()};
  .ant-card-head-title {
    overflow: visible;
    white-space: unset;
  }
`;
