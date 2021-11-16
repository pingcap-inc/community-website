import styled from 'styled-components';
import { constants, Styled } from '@tidb-community/ui';
import { Row, Col } from 'antd';

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

export const Start = styled(Col).attrs({
  sm: 24,
  md: 6,
})``;

export const Center = styled(Col).attrs({
  sm: 24,
  md: 12,
})``;

export const End = styled(Col).attrs({
  sm: 24,
  md: 6,
})``;

export const List = styled(Row).attrs({
  gutter: [24, 24],
})`
  padding: 2rem 0;
`;

export const Item = styled(Col).attrs({
  span: 6,
})``;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
`;
