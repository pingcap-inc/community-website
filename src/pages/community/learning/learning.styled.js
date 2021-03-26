import styled from 'styled-components';
import { colors, mixins } from '@pingcap/pingcap-ui';

export const Container = styled.div`
  padding: 5rem 0;
  background: ${colors.M2};
`;

export const Content = styled.div`
  ${mixins.centerBlock()};
  ${mixins.responsive()};
`;
