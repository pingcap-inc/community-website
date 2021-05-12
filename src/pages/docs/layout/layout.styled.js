import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Container = styled.div`
  ${mixins.responsive()};
  color: ${colors.F2};

  h1,
  h2 {
    color: ${colors.F1};
  }

  h1 {
    margin: 4rem 0 2rem;
    text-align: center;
  }

  h2 {
    margin: 2rem 0 1rem;
  }

  ol {
    list-style: none;
  }

  > ol {
    padding-left: 0;
  }

  li {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
