import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Container = styled.div`
  padding: 2rem;
  background: ${colors.M1};
`;

export const Title = styled.h2`
  ${mixins.typography('p1')};
  font-weight: bold;
  margin-bottom: 1rem;
`;
