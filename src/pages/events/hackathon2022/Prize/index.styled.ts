import styled from 'styled-components';
import { Col, Row, Space } from 'antd';

export const Container = styled(Space).attrs({
  direction: 'vertical',
  size: 74,
})``;

export const Description = styled.div`
  margin-top: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */
  text-align: center;
  /* F3 */
  color: #999999;
`;

export const SpecialPrizeTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;
  /* identical to box height */
  text-align: center;
  letter-spacing: 0.2em;
  color: #ffffff;
`;

export const SpecialPrizeDescription = styled.div`
  margin-top: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */
  text-align: center;
  /* F3 */
  color: #999999;
`;

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
  gutter: [64, 64],
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
`;
