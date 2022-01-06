import styled from 'styled-components';
import { Row, Col } from 'antd';
import { Styled, constants } from '@tidb-community/ui';

const { Content } = Styled;

export { Content };

export const Container = styled(Row).attrs({
  gutter: 24,
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

export const Action = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled.div`
  margin: 2rem auto;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
`;
