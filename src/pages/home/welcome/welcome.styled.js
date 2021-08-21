import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

import { Section, Content } from '~/pages/home/index.styled';

export { Content };

export const Container = styled(Section)`
  text-align: center;

  && {
    padding-top: 5rem;
    background: ${colors.M2};
  }
`;

export const Title = styled.h2`
  display: inline-block;
  font-size: 36px;
  line-height: 1;
  position: relative;
  z-index: 0;

  &::after {
    content: '';
    display: block;
    height: 12px;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: ${colors.T1};
    z-index: -1;
  }
`;

export const Intro = styled.p`
  ${mixins.reset()};
  font-size: 18px;
  margin-bottom: 1rem;
`;
