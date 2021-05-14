import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Container = styled.div`
  ${mixins.responsive()};
  padding-top: 2rem;
`;

export const Main = styled.div`
  background-color: ${colors.M2};
  flex: 1;
  padding-bottom: 6em;
`;
