import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Container = styled.div`
  background: ${colors.M2};
`;

export const Content = styled.div`
  ${mixins.responsive()};
`;
