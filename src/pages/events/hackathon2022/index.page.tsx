import * as React from 'react';
import classNames from 'classnames';
import { Space } from 'antd';
import type { NextPage } from 'next';

import { CoreLayout } from '~/layouts';
import { CommunityHead } from '~/components';

import styles from './index.module.scss';
import * as Styled from './index.styled';
import TitleImage from './title.svg';
import BannerImage from './banner_image.svg';
import { getI18nProps } from '~/utils/i18n.utils';
import SectionTitle from './SectionTitle';
import TitleCubeOrangeIcon from './title_icon_cube_orange.svg';
import TitleCornerSkyBlueIcon from './title_icon_corner_skyblue.svg';
import TitleCornerGreenIcon from './title_icon_corner_green.svg';
import TitleCubeSkyBlueIcon from './title_icon_cube_skyblue.svg';
import TitleCloudDeepBlue from './title_icon_cloud_deepblue.svg';
import ThemeRace from './ThemeRace';
import CompetitionProcess from './CompetitionProcess';
import ParticipationWelfare from './ParticipationWelfare';
import Prize from './Prize';
import Judge from './Judge';
import FAQ from './FAQ';
import Partner from './Partner';
import PastReview from './PastReview';

const seo = {
  title: 'TiDB Hackathon 2022',
  //TODO
  description: '',
  keywords: ['黑客马拉松', 'TiDB', 'Hackathon'],
};

const Hackathon2022: NextPage = () => {
  return (
    <CoreLayout>
      <CommunityHead title={seo.title} description={seo.description} keyword={seo.keywords} />

      <div className={classNames(styles.container)}>
        <header className={styles.header}>
          <div className={styles.header_start}>
            <div className={styles.header_start_title}>
              {/*<img src={titleImage} alt={seo.title} />*/}
              <TitleImage />
            </div>
            <Space className={styles.header_start_button} size={22}>
              <button className={styles.header_start_button_signup}>立即报名</button>
              <button className={styles.header_start_button_join_group}>加入官方群</button>
              <button className={styles.header_start_button_ask}>我要咨询</button>
            </Space>
            <Space className={styles.header_start_nav} split={<span style={{ color: '#FFF' }}>|</span>} size={24}>
              <a className={styles.header_start_nav_item} href={'#intro'}>
                介绍
              </a>
              <a className={styles.header_start_nav_item} href={'#prize'}>
                奖项
              </a>
              <a className={styles.header_start_nav_item} href={'#judges'}>
                评委
              </a>
              <a className={styles.header_start_nav_item} href={'#faq'}>
                常见问题
              </a>
              <a className={styles.header_start_nav_item} href={'#partner'}>
                合作伙伴
              </a>
            </Space>
          </div>
          <div className={styles.header_end}>
            {/*<img src={bannerImage} alt="" />*/}
            <BannerImage />
          </div>
        </header>

        <Styled.Intro>
          <SectionTitle icon={<TitleCubeOrangeIcon />}>大赛介绍</SectionTitle>
          <Styled.IntroContent>
            本次 Hackathon 主题为「Possibility at Scale」，打破传统技术边界，突破固有思维局限，用 TiDB
            释放创新的更多可能性。
          </Styled.IntroContent>
        </Styled.Intro>

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

        <Styled.Prize>
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

        <Styled.Judge>
          <SectionTitle icon={<TitleCornerGreenIcon />}>评委导师阵容</SectionTitle>
          <Styled.JudgeBody>
            <Judge />
          </Styled.JudgeBody>
        </Styled.Judge>

        <Styled.FAQ>
          <SectionTitle icon={<TitleCubeSkyBlueIcon />}>FAQ</SectionTitle>
          <Styled.FAQBody>
            <FAQ />
          </Styled.FAQBody>
        </Styled.FAQ>

        <Styled.Partner>
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
