import styled from 'styled-components';
import { mixins } from '@tidb-community/ui';

export const Container = styled.div`
  ${mixins.responsive()};
  ${mixins.flexCenter()};
  padding: 2rem 0;
  flex-direction: column;
  flex: 1;
`;
