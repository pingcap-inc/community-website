import styled from 'styled-components';
import { mixins } from '@tidb-community/ui';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
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
