import styled from 'styled-components';
import { colors, Styled } from '@tidb-community/ui';
import { Row, Col } from 'antd';

const { Content } = Styled;

export { Content };

export const Background = styled.div`
  background-color: ${colors.M2};
`;

export const Container = styled(Row).attrs({
  gutter: [24, 24],
})`
  //display: flex;
  margin: 2rem auto;
`;

export const Start = styled(Col).attrs({
  span: 4,
})``;

export const Center = styled(Col).attrs({
  span: 14,
})``;

export const End = styled(Col).attrs({
  span: 6,
})``;
