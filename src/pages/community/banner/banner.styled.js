import styled from 'styled-components';
import { colors, mixins } from '@pingcap/pingcap-ui';

import { bgHeight } from './banner.constants';

export const Container = styled.div`
  position: relative;
  height: ${bgHeight}px;
`;

export const Background = styled.div`
  ${mixins.size('100%', `${bgHeight}px`)};
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
`;

export const Content = styled.div`
  ${mixins.responsive()};
  ${mixins.flexCenter()};
`;

export const Title = styled.h2`
  ${mixins.reset()};
  font-size: 48px;
  color: ${colors.M1};
`;
