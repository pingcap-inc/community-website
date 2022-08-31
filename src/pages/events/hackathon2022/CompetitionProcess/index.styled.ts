import styled from 'styled-components';
import { mixins } from '@tidb-community/ui';
import { Row, Col, Space } from 'antd';

export const Container = styled(Row).attrs({
  gutter: [32, 32],
})``;

export const Column = styled(Col).attrs({
  md: 8,
  sm: 12,
  xs: 24,
})``;

export const Item = styled.div`
  ${mixins.transition()};
  /* M5 */
  background: #282a36;
  border: 1px solid rgba(237, 237, 237, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 34px 40px 24px 40px;
  width: 100%;
  height: 100%;
  a {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    /* identical to box height, or 175% */
    color: #82c1ed;
  }
`;

export const Start = styled.div``;

export const End = styled(Space).attrs({
  size: [40, 40],
})`
  margin-top: 20px;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height */
  color: #82c1ed;
`;

export const Date = styled.div`
  margin-top: 6px;
  margin-bottom: 34px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */
  /* F3 */
  color: #999999;
`;

export const Paragraph = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */
  color: #ffffff;
`;

export const Link = styled.div``;
