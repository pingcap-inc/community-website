import styled from 'styled-components';
import { Col, Row, Space } from 'antd';

export const Container = styled(Space).attrs({
  direction: 'vertical',
  size: 74,
})``;

export const Category = styled.div``;

export const Title = styled.div`
  width: 100%;
  text-align: left;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */
  /* F3 */
  color: #999999;
`;

export const List = styled(Row).attrs({
  gutter: [32, 32],
})`
  margin-top: 26px;
`;

export const Column = styled(Col).attrs({
  md: 4,
  sm: 8,
  xs: 12,
})``;

export const Item = styled.div`
  width: 160px;
  height: 80px;
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
  }
`;
