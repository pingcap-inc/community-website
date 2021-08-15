import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Container = styled.div`
  ${mixins.flexCenter()};
  color: ${colors.F1};
  background: ${colors.M2};
  padding: 1rem 0;
`;
