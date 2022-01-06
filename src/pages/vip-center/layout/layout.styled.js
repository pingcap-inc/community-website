import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Wrapper = styled.div`
  background-color: ${colors.M2};
`;

export const Container = styled.div`
  ${mixins.responsive()};
  padding-top: 2rem;
`;

export const Main = styled.div``;
