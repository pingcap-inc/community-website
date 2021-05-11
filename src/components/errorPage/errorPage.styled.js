import styled from 'styled-components';
import { mixins } from '@tidb-community/ui';

export const Container = styled.div`
  ${mixins.responsive()};
  ${mixins.flexCenter()};
  flex-direction: column;
  flex: 1;
`;

export const IconWrapper = styled.div`
  svg {
    height: 30vh;
    min-height: 250px;
  }
`;
