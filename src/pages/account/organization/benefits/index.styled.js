import styled from 'styled-components';
import { colors as _colors } from '@tidb-community/ui';

import DecoratorLinesSvg from './decorator-lines.svg';
import DecoratorOvalSvg from './decorator-oval.svg';
import DecoratorPointsSvg from './decorator-points.svg';

const colors = _colors.VI;

export const MainWrapper = styled.div`
  flex: 1;
  background-color: ${colors.B6};
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

export const Container = styled.div`
  z-index: 1;
  margin: auto auto 240px;
  max-width: 1270px;
  position: relative;

  @media screen and (max-width: 810px) {
    margin-bottom: 4em;
  }
`;

export const DecoratorLines = styled(DecoratorLinesSvg)`
  position: absolute;
  z-index: -1;
  right: -56px;
  top: 37px;
  opacity: 0.6;
`;

export const DecoratorOval = styled(DecoratorOvalSvg)`
  position: absolute;
  z-index: -1;
  right: -170px;
  bottom: 60px;
  opacity: 0.6;
`;

export const DecoratorPoints = styled(DecoratorPointsSvg)`
  position: absolute;
  width: 153.57px;
  height: 94px;
  z-index: -1;
  left: 40px;
  top: 630px;
  opacity: 0.6;
`;
