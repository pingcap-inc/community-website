import styled from 'styled-components';
import { mixins } from '@tidb-community/ui';

export const Container = styled.div.attrs({})`
  ${mixins.showOnMobile()}
  margin: .5rem 0;
`;
