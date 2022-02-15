import styled from 'styled-components';
import { mixins, colors } from '@tidb-community/ui';
import { Card as AntdCard } from 'antd';
import { borderRadius } from '../common.styled';

export const Container = styled.div`
  ${mixins.showOnDesktop()}
  ${borderRadius}
  margin-top: 1rem;
  a {
    color: ${colors.B1};
  }
`;

//export const Header = styled.div`
//  font-size: 14px;
//`;

export const Card = styled(AntdCard)`
  ${borderRadius}
`;
