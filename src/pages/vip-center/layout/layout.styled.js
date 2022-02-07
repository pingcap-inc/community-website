import styled from 'styled-components';
import { mixins } from '@tidb-community/ui';

export const Wrapper = styled.div`
  background-color: #e9eaee;
  padding-bottom: 2rem;
`;

export const Container = styled.div`
  ${mixins.responsive()};
  padding-top: 2rem;
`;

export const Main = styled.div``;
