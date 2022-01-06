import styled from 'styled-components';
import { Row, Col } from 'antd';
import { Styled, constants } from '@tidb-community/ui';

const { Content } = Styled;

export { Content };

export const Container = styled(Row).attrs({
  gutter: 32,
})`
  @media screen and (max-width: ${constants.breakPoints.md}) {
    padding: 1rem 0;
  }

  @media screen and (min-width: ${constants.breakPoints.md}) {
    padding: 2rem 0;
  }
`;

const totalSpan = 24;
const desktopStartSpan = 6;
const desktopEndSpan = totalSpan - desktopStartSpan;

export const Start = styled(Col).attrs({
  xs: 24,
  sm: 24,
  md: desktopStartSpan,
  lg: desktopStartSpan,
  xl: desktopStartSpan,
})``;

export const End = styled(Col).attrs({
  xs: 24,
  sm: 24,
  md: desktopEndSpan,
  lg: desktopEndSpan,
  xl: desktopEndSpan,
})``;
