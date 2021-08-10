import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Container = styled.div`
  ${mixins.flexCenter()};
  color: ${colors.M1};
  background: ${colors.B4};
  padding: 1rem 0;
`;
