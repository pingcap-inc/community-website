import styled from 'styled-components';
import { colors } from '@tidb-community/ui';

import { Section } from '~/pages/home/index.styled';

export const Container = styled(Section)`
  && {
    padding-top: 5rem;
    background: ${colors.M2};
  }
`;

export const Title = styled.h2`
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
