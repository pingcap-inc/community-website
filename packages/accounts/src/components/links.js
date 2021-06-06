import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '@tidb-community/ui';

export const RouteLink = styled(Link)`
  color: #aaa;

  &:hover {
    color: ${colors.B1};
  }
`;

export const ActionLink = styled.a`
  color: #aaa;

  &:hover {
    color: ${colors.B1};
  }
`;
