import * as React from 'react';
import type { NextPage } from 'next';

import { CoreLayout } from '~/layouts';
import { CommunityHead } from '~/components';
import { getI18nProps } from '~/utils/i18n.utils';

import * as Styled from './index.styled';
import SectionTitle from './SectionTitle';
import TitleCubeOrangeIcon from './title_icon_cube_orange.svg';
import TitleCornerSkyBlueIcon from './title_icon_corner_skyblue.svg';
import TitleCornerGreenIcon from './title_icon_corner_green.svg';
import TitleCubeSkyBlueIcon from './title_icon_cube_skyblue.svg';
import TitleCloudDeepBlue from './title_icon_cloud_deepblue.svg';
import backgroundCornerSkyblueImage from './background_corner_skyblue.png';
import backgroundCornerGreenImage from './background_corner_green.png';
import backgroundCornerBlueImage from './background_corner_blue.png';
import backgroundCornerSkyblueReverseImage from './background_corner_skyblue_reverse.png';
import Header from './Header';
import ThemeRace from './ThemeRace';
import CompetitionProcess from './CompetitionProcess';
import ParticipationWelfare from './ParticipationWelfare';
import Prize from './Prize';
import Judge from './Judge';
import FAQ from './FAQ';
import Partner from './Partner';
import PastReview from './PastReview';

const description =
  '本次 Hackathon 主题为「Possibility at Scale」，打破传统技术边界，突破固有思维局限，用 TiDB 释放创新的更多可能性。';

const seo = {
  title: 'TiDB Hackathon 2022',
  description,
  keywords: ['黑客马拉松', 'TiDB', 'Hackathon'],
};

const Hackathon2022: NextPage = () => {
  return (
    <CoreLayout>
      <CommunityHead title={seo.title} description={seo.description} keyword={seo.keywords} />

      <Styled.MyContainer>
        <Header />

        <Styled.Intro id={'intro'}>
          <SectionTitle icon={<TitleCubeOrangeIcon />}>大赛介绍</SectionTitle>
          <Styled.IntroContent>{description}</Styled.IntroContent>
        </Styled.Intro>

        <div style={{
          backgroundImage: `url(${backgroundCornerSkyblueImage.src})`,
          backgroundRepeat: 'no-repeat',
        }}>
          <Styled.ThemeRace>
            <SectionTitle>主题赛道</SectionTitle>
            <Styled.ThemeRaceBody>
              <ThemeRace />
            </Styled.ThemeRaceBody>
          </Styled.ThemeRace>

          <Styled.CompetitionProcess>
            <SectionTitle icon={<TitleCornerSkyBlueIcon />}>参赛流程</SectionTitle>
            <Styled.CompetitionProcessBody>
              <CompetitionProcess />
            </Styled.CompetitionProcessBody>
          </Styled.CompetitionProcess>
        </div>

        <div style={{
          backgroundImage: `url(${backgroundCornerGreenImage.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right',
        }}>
          <Styled.Prize id={'prize'}>
            <SectionTitle icon={<TitleCloudDeepBlue />}>大赛奖项</SectionTitle>
            <Styled.PrizeBody>
              <Prize />
            </Styled.PrizeBody>
          </Styled.Prize>

          <Styled.ParticipationWelfare>
            <SectionTitle>其他参赛福利</SectionTitle>
            <Styled.ParticipationWelfareBody>
              <ParticipationWelfare />
            </Styled.ParticipationWelfareBody>
          </Styled.ParticipationWelfare>
        </div>

        <div style={{
          backgroundImage: `url(${backgroundCornerBlueImage.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left',
        }}>
          <Styled.Judge id={'judges'}>
            <SectionTitle icon={<TitleCornerGreenIcon />}>评委导师阵容</SectionTitle>
            <Styled.JudgeBody>
              <Judge />
            </Styled.JudgeBody>
          </Styled.Judge>

          <Styled.FAQ id={'faq'}>
            <SectionTitle icon={<TitleCubeSkyBlueIcon />}>FAQ</SectionTitle>
            <Styled.FAQBody>
              <FAQ />
            </Styled.FAQBody>
          </Styled.FAQ>
        </div>

        <div style={{
          backgroundImage: `url(${backgroundCornerSkyblueReverseImage.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right',
        }}>
          <Styled.Partner id={'partner'}>
            <SectionTitle icon={<TitleCubeOrangeIcon />}>合作伙伴</SectionTitle>
            <Styled.PartnerBody>
              <Partner />
            </Styled.PartnerBody>
          </Styled.Partner>

          <Styled.PastReview>
            <SectionTitle icon={<TitleCubeSkyBlueIcon />}>往期回顾</SectionTitle>
            <Styled.PastReviewBody>
              <PastReview />
            </Styled.PastReviewBody>
          </Styled.PastReview>
        </div>

      </Styled.MyContainer>
    </CoreLayout>
  );
};

export default Hackathon2022;

export const getServerSideProps = async (ctx) => {
  //const client = await api.initStrapiClient();
  //
  //const data = await Promise.all([
  //  client.get('tidbio-hackathon-2021-leaderboards'),
  //  client.get('tidbio-hackathon-2021-news'),
  //]);
  //@ts-ignore
  const i18nProps = await getI18nProps(['common'])(ctx);

  return {
    props: {
      ...i18nProps,
      //data: jsConvert.camelKeys(
      //  {
      //    leaderboard: data[0],
      //    news: data[1],
      //  },
      //  {
      //    recursive: true,
      //    recursiveInArray: true,
      //  }
      //),
    },
  };
};
