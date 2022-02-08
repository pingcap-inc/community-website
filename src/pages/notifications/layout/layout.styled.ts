import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Container = styled.div`
  ${mixins.responsive()};
  padding-top: 2rem;
`;

export const Main = styled.div`
  border: 1px solid ${colors.T2};
`;

export const Content = styled.div`
  padding: 1rem;

  &,
  .ant-form {
    ${mixins.typography('p2')};
  }
`;
