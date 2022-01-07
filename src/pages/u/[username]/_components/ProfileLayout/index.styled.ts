import styled from 'styled-components';
import { Row, Col } from 'antd';
import { Styled, constants } from '@tidb-community/ui';

const { Content } = Styled;

export { Content };

export const Container = styled(Row).attrs({
  gutter: [32, 32],
})`
  @media screen and (max-width: ${constants.breakPoints.md}) {
    padding: 1rem 0;
  }

  @media screen and (min-width: ${constants.breakPoints.md}) {
    padding: 2rem 0;
  }
`;

export const Start = styled(Col).attrs({
  xs: 24,
  sm: 24,
  md: 8,
  lg: 6,
  xl: 6,
})``;

export const End = styled(Col).attrs({
  xs: 24,
  sm: 24,
  md: 16,
  lg: 18,
  xl: 18,
})``;
