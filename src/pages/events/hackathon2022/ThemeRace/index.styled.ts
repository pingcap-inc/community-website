import styled from 'styled-components';
import { Col, Row } from 'antd';

export const Container = styled(Row).attrs({
  gutter: [32, 32],
})``;

export const ThemeRaceListItem = styled(Col).attrs({
  lg: 12,
  md: 24,
})``;

export const ThemeRaceListItemContainer = styled.div<{ $color: string }>`
  height: 100%;
  padding: 30px 36px 48px 36px;
  border-width: 1px;
  border-top-width: 16px !important;
  border-style: solid;
  border-color: ${({ $color }) => $color};
`;

export const ThemeRaceListItemName = styled.div<{ $color: string }>`
  color: ${({ $color }) => $color};
`;

export const ThemeRaceListItemBody = styled.div`
  margin-top: 26px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */
  color: #ffffff;
`;
