import styled from 'styled-components';
import { mixins } from '@tidb-community/ui';
import { Row, Col } from 'antd';

export const Container = styled(Row).attrs({
  gutter: [32, 32],
})``;

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
`;

export const Name = styled.div`
  ${mixins.transition()};
  margin-top: 16px;
  font-weight: 500;
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

export const Action = styled.div``;

export const ActionGitHub = styled.div``;

export const ActionPlay = styled.div``;
