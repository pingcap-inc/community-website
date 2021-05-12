import styled from 'styled-components';
import { mixins } from '@tidb-community/ui';

export const Container = styled.div`
  ${mixins.responsive()};
  ${mixins.flexCenter()};
  padding: 32px 0;
  flex-direction: column;
  flex: 1;
`;

export const IconWrapper = styled.div`
  svg {
    height: 30vh;
    min-height: 250px;
  }
`;

export const Message = styled.div`
  ${mixins.typography('p1')};
  margin: 24px 0 16px;
`;
