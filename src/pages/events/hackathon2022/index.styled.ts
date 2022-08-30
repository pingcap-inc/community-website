import styled from 'styled-components';
import { Col, Row } from 'antd';

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const IntroContent = styled.div`
  margin-top: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */
  text-align: center;
  color: #ffffff;
`;

export const ThemeRace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 66px;
`;

export const ThemeRaceList = styled(Row).attrs({
  gutter: [32, 32],
})`
  margin-top: 60px;
`;

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

export const ParticipationWelfare = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

export const ParticipationWelfareBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;
