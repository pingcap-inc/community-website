import styled from 'styled-components';
import { Col, Row } from 'antd';

export const Container = styled(Row).attrs({
  justify: 'space-between',
  gutter: [24, 48],
})``;

export const Item = styled(Col).attrs({
  lg: 8,
  md: 12,
  sm: 24,
})`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const iconSize = '52px';
export const Icon = styled.div`
  margin-right: 42px;
  //img,
  //svg {
  //  width: ${iconSize};
  //  height: ${iconSize};
  //}
`;

export const Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height */
  color: #ffffff;
`;
