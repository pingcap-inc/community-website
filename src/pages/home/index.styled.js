import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Section = styled.div`
  ${mixins.flexCenter()};
  color: ${colors.F1};
  background: ${colors.M1};
  padding: 1rem 0;
`;

export const Content = styled.div`
  ${mixins.responsive()};
`;
