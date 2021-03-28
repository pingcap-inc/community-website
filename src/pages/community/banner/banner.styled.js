import styled from 'styled-components';
import { mixins } from '@pingcap/pingcap-ui';

export const Container = styled.div`
  height: 416px;
`;

export const Content = styled.div`
  ${mixins.responsive()};
`;
