import styled from 'styled-components';
import Container from '~/components/Container';

export const MyContainer = styled.div`
  background: #20222b;
  padding-bottom: 128px;
`;

export const Intro = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0 16px;
`;

export const IntroContent = styled.div`
  padding-top: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */
  text-align: center;
  color: #ffffff;
`;

export const ThemeRace = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 66px;
`;

export const ThemeRaceBody = styled.div`
  margin-top: 60px;
`;

export const WinnerTeam = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 66px;
`;
export const WinnerTeamBody = styled.div`
  margin-top: 60px;
`;

export const FinalistTeam = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 66px;
`;
export const FinalistTeamBody = styled.div`
  margin-top: 60px;
  overflow: hidden;
`;

export const CompetitionProcess = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 78px;
`;

export const CompetitionProcessBody = styled.div`
  //max-width: 960px;
  margin-top: 48px;
`;

export const Prize = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 78px;
`;

export const PrizeBody = styled.div`
  //max-width: 960px;
  margin-top: 48px;
  width: 100%;
`;

export const ParticipationWelfare = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
`;

export const ParticipationWelfareBody = styled.div`
  margin-top: 70px;
`;

export const Judge = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 96px;
`;

export const JudgeDescription = styled.div`
  padding-top: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */
  text-align: center;
  /* F3 */
  color: #999999;
`;

export const JudgeBody = styled.div`
  margin-top: 48px;
`;

export const FAQ = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 78px;
`;

export const FAQBody = styled.div`
  max-width: 960px;
  width: 100%;
  margin-top: 56px;
`;

export const Partner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 78px;
`;

export const PartnerBody = styled.div`
  //max-width: 960px;
  margin-top: 56px;
`;

export const PastReview = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 78px;
`;

export const PastReviewBody = styled.div`
  //max-width: 960px;
  margin-top: 48px;
`;
