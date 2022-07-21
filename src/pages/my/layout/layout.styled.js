import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Container = styled.div`
  ${mixins.responsive()};
  padding: 2rem 0;
`;

export const Main = styled.div`
  border: 1px solid ${colors.T2};
`;

export const Title = styled.h1`
  ${mixins.typography('p1')};
  ${mixins.reset()};
  font-weight: bold;
  colors: ${colors.F1};
  padding: 0.8rem 1rem;
  border-bottom: 1px solid ${colors.T2};
`;

export const Content = styled.div`
  padding: 1rem;

  &,
  .ant-form {
    ${mixins.typography('p2')};
  }
`;
