import styled from 'styled-components';
import DecoratorLinesSvg from './decorator-lines.svg';
import DecoratorOvalSvg from './decorator-oval.svg';
import DecoratorPointsSvg from './decorator-points.svg';

export const MainWrapper = styled.div`
  flex: 1;
  background-color: #190f4b;
  position: relative;
  z-index: 1;
`;

export const Container = styled.div`
  z-index: 1;
  margin: auto auto 240px;
  max-width: 1270px;
  position: relative;
  padding: 0 30px;
`;

export const DecoratorLines = styled(DecoratorLinesSvg)`
  position: absolute;
  z-index: -1;
  right: -56px;
  top: 37px;
`;

export const DecoratorOval = styled(DecoratorOvalSvg)`
  position: absolute;
  z-index: -1;
  right: -170px;
  bottom: 60px;
`;

export const DecoratorPoints = styled(DecoratorPointsSvg)`
  position: absolute;
  width: 153.57px;
  height: 94px;
  z-index: -1;
  left: 40px;
  top: 630px;
`;
