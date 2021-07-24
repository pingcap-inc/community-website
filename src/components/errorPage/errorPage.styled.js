import styled from 'styled-components';
import { mixins } from '@tidb-community/ui';

export const Container = styled.div`
  ${mixins.responsive()};
  ${mixins.flexCenter()};
  padding: 2rem 0;
  flex-direction: column;
  flex: 1;
`;

export const IconWrapper = styled.div`
  svg {
    width: 30vw;
    max-width: 280px;
    min-width: 160px;
  }
`;

export const Message = styled.div`
  ${mixins.typography('p1')};
  margin: 1.5rem 0 1rem;
`;
