import styled from 'styled-components';
import { colors } from '@tidb-community/ui';

export const Container = styled.a`
  color: ${colors.F1};
  text-underline: ${colors.F1};
  text-decoration: underline;
  font-size: ${(props) => props.fontSize};
  cursor: pointer;
`;
