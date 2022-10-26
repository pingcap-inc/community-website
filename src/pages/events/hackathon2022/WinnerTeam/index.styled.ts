import styled from 'styled-components';
import { mixins } from '@tidb-community/ui';
import { Col, Row } from 'antd';

export const Container = styled(Row).attrs({
  gutter: [32, 32],
})``;

export const Section = styled.div``;

export const SectionTitle = styled.div`
  text-align: center;
`;

export const SectionBody = styled(Row)`
  margin-top: 32px;
`;

export const Column = styled(Col).attrs({
  lg: 6,
  md: 8,
  sm: 12,
  xs: 24,
})``;

export const Item = styled.div`
  ${mixins.transition()};
  overflow: auto;
  position: relative;
  padding: 16px 24px;
`;

export const Card = styled.div`
  padding: 12px;
  border: 1px solid rgba(237, 237, 237, 0.2);
`;

export const Picture = styled.div`
  ${mixins.transition()};
  //width: 285px;
  height: 190px;
  background: #a56161;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Name = styled.div`
  ${mixins.transition()};
  margin-top: 16px;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
`;

export const Bonus = styled.div`
  ${mixins.transition()};
  margin-top: 8px;
  font-weight: 400;
  font-size: 14px;
  /* M1 */
  color: #ffffff;
`;

export const OverLayer = styled.div`
  //${mixins.transition()};
  position: absolute;
  //top: 0;
  //left: 0;
  //max-width: 304px;
  //padding: 60px 38px;
  padding: 0 32px;
  padding-bottom: 32px;
  text-align: left;
  //width: 100%;
  overflow: auto;
`;

export const Action = styled.div<{ $color: string }>`
  margin-top: 24px;
  a {
    color: #fff;
    height: 24px;
    line-height: 1;
  }
  svg:hover,
  a:hover {
    color: ${({ $color }) => $color};
  }
`;

export const ActionItem = styled.div``;
