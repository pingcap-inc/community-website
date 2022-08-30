import styled from 'styled-components';
import { Col, Row } from 'antd';

export const Container = styled(Row).attrs({
  gutter: [32, 32],
})``;

export const Column = styled(Col).attrs({
  md: 6,
  sm: 12,
  xs: 24,
})``;

export const Item = styled.div`
  width: 300px;
  height: 200px;
  background-color: #fff;
`;
