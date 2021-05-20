import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Container = styled.div`
  ${mixins.responsive()};
  padding-top: 2rem;
`;

export const Main = styled.div`
  flex: 1;
  background-color: ${colors.M2};
  padding-bottom: 6em;
`;
