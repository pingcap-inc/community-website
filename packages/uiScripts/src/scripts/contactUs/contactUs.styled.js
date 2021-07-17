import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Container = styled.div`
  ${mixins.size('42px')};
  ${mixins.flexCenter()};
  border-radius: 50%;
  background: ${colors.B1};
  position: fixed;
  right: 32px;
  bottom: 32px;
`;
