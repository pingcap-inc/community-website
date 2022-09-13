import styled, { css } from 'styled-components';
import { mixins } from '@tidb-community/ui';
import { Row, Col, Space } from 'antd';

export const button = () => css`
  padding: 6px 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */
  color: #82c1ed;
  border: 1px solid #82c1ed; ;
`;

export const buttonPrimary = () => css`
  padding: 6px 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */
  background-color: #82c1ed;
  color: #ffffff;
  border: 1px solid #82c1ed; ;
`;

export const Container = styled(Row).attrs({
  gutter: [32, 32],
})`
  //overflow: hidden;
  //padding-bottom: 8px;
`;

export const Column = styled(Col).attrs({
  md: 8,
  sm: 12,
  xs: 24,
})``;

export const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const Item = styled.div`
  ${mixins.transition()};
  /* M5 */
  background: #282a36;
  border: 1px solid rgba(237, 237, 237, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 34px 40px 24px 40px;
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
  a:hover {
    color: #00cf71;
  }
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
  //display: flex;
  //align-items: flex-start;
  svg {
    position: relative;
    top: 4px;
  }
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

export const Step = styled.div`
  margin-top: 26px;
`;

export const StepText = styled.div<{ $color: string }>`
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;
  /* identical to box height */
  letter-spacing: 0.2em;
  color: ${({ $color }) => $color};
`;

const pointInnerSizePx = 12;
const pointPaddingSizePx = 6;
const pointBorderSizePx = 1;
const pointInnerWidthPx = pointInnerSizePx + 2 * pointPaddingSizePx;
const pointOuterWidthPx = pointInnerWidthPx + 2 * pointBorderSizePx;

export const StepLine = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StepLineItem = styled.div<{ $show: boolean }>`
  //position: relative;
  //transform: scaleX(1.25) translateX(0px);
  width: calc((100% - ${pointOuterWidthPx}px) / 2);
  //width: 100%;
  border-bottom: ${({ $show }) => ($show ? 1 : 0)}px solid #82c1ed;
`;

export const StepPoint = styled.div<{ $color: string }>`
  width: ${pointInnerSizePx}px;
  height: ${pointInnerSizePx}px;
  background: ${({ $color }) => $color};
  outline-offset: ${pointPaddingSizePx}px;
  outline: ${pointBorderSizePx}px dashed ${({ $color }) => $color};
  border-radius: ${pointInnerWidthPx}px;
  overflow: hidden;
`;
