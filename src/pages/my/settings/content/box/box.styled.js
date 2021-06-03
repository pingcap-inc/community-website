import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Container = styled.div`
  ${mixins.flexVerticalCenter()};
  border: 1px solid ${colors.T2};
  padding: 1rem;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  h2,
  p {
    ${mixins.reset()};
  }

  h2 {
    ${mixins.typography('p1')};
    font-weight: bold;
  }

  p {
    margin-top: 0.5rem;
    ${mixins.typography('p2')};
  }

  .extra {
    ${mixins.typography('p2')};
    color: ${colors.C4};
  }
`;

export const Content = styled.div`
  flex: 1;
`;
