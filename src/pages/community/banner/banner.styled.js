import styled from 'styled-components';
import { colors, mixins } from '@pingcap/pingcap-ui';

import { bgHeight } from './banner.constants';

export const Container = styled.div`
  position: relative;
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
  flex-direction: column;
  height: ${bgHeight}px;

  h2,
  h3,
  p {
    ${mixins.reset()};
  }

  h2 {
    font-size: 48px;
    line-height: 1;
    color: ${colors.M1};
    margin-bottom: 1.5rem;
  }

  p {
    ${mixins.typography('p1')}
    color: ${colors.M1};
  }
`;

export const Navs = styled.div`
  ${mixins.flexCenter()};
  position: absolute;
  bottom: -50px;
`;

export const NavCard = styled.div`
  ${mixins.flexCenter()};
  ${mixins.size('188px', '100px')};
  flex-direction: column;
  background: ${colors.M1};
  padding: 1rem 2rem;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  margin-right: 2rem;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  h3 {
    ${mixins.typography('h2')};
  }

  div {
    margin-top: 0.2rem;
    text-transform: uppercase;
  }
`;
