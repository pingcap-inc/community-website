import styled from 'styled-components';
import { colors, mixins } from '@pingcap/pingcap-ui';

export const Container = styled.div`
  padding: 5rem 0;
  background: ${colors.M2};
`;

export const Content = styled.div`
  ${mixins.centerBlock()};
  ${mixins.responsive()};
`;

export const Title = styled.h2`
  ${mixins.reset()};
  ${mixins.typography('h1')}
  margin-bottom: 2rem;
`;

export const Desc = styled.ul`
  ${mixins.reset()};
  ${mixins.typography('p1')};
  list-style: square inside;

  li {
    margin-bottom: 1rem;
  }
`;
