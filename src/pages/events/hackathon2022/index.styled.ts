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

export const CompetitionProcess = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 78px;
`;

export const CompetitionProcessBody = styled.div`
  //max-width: 960px;
  margin-top: 48px;
`;

export const Prize = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 78px;
`;

export const PrizeBody = styled.div`
  //max-width: 960px;
  margin-top: 48px;
`;

export const ParticipationWelfare = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

export const ParticipationWelfareBody = styled.div`
  margin-top: 70px;
`;

export const Judge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 96px;
`;

export const JudgeBody = styled.div`
  margin-top: 48px;
`;

export const FAQ = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 78px;
`;

export const FAQBody = styled.div`
  max-width: 960px;
  margin-top: 56px;
`;

export const Partner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 78px;
`;

export const PartnerBody = styled.div`
  //max-width: 960px;
  margin-top: 56px;
`;

export const PastReview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 78px;
`;

export const PastReviewBody = styled.div`
  //max-width: 960px;
  margin-top: 48px;
`;
