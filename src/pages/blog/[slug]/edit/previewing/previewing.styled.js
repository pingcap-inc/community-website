import styled from 'styled-components';
import { colors } from '@tidb-community/ui';
import { transparentize } from 'polished';

export const Declaration = styled.p`
  font-size: 14px;
  color: ${transparentize(0.5, colors.F2)};
`;
