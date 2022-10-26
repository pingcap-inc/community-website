import * as React from 'react';
import type { NextPage } from 'next';

import { CoreLayout } from '~/layouts';
import { CommunityHead } from '~/components';

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
import TitleWinnerIcon from './title-winner-icon.svg';
import WinnerTeam from './WinnerTeam';
import CompetitionProcess from './CompetitionProcess';
import Prize from './Prize';
import ParticipationWelfare from './ParticipationWelfare';
import Judge from './Judge';
import FAQ from './FAQ';
import Partner from './Partner';
import PastReview from './PastReview';
import {
  dataFAQ,
  dataHeader,
  dataJudge,
  dataParticipationWelfare,
  dataPartner,
  dataPrize,
  dataThemeRace,
  dataWinnerTeam,
} from './data';
import SideBar from './SideBar';

const description =
  '本届大赛主题为「Possibility at Scale」，规模创历史之最，共有 303 名选手报名 ，86 支队伍参赛，有来自微软、蚂蚁集团、字节跳动、网易有道、浪潮、明朝万达、B 站、思科、太极图形等企业的选手，也有来自清华大学、北京邮电大学、华东师范大学、浙江理工大学、新加坡国立大学等高校的学生。选手们围绕着 TiDB 产品组和应用组两大赛道，展开了一场技术的比拼和创意的碰撞。';

const seo = {
  title: 'TiDB Hackathon 2022',
  description,
  keywords: ['黑客马拉松', 'TiDB', 'Hackathon'],
};

const Hackathon2022: NextPage = () => {
  return (
    <CoreLayout>
      <CommunityHead title={seo.title} description={seo.description} keyword={seo.keywords} />

      <SideBar />

      <Styled.MyContainer>
        <Header data={dataHeader} />

        <Styled.Intro id={'intro'}>
          <SectionTitle icon={<TitleCubeOrangeIcon />}>大赛回顾</SectionTitle>
          <Styled.IntroContent>
            <p>
              本届大赛主题为「Possibility at Scale」，
              <strong>
                规模创历史之最，共有 303 名选手报名 ，86
                支队伍参赛，有来自微软、蚂蚁集团、字节跳动、网易有道、浪潮、明朝万达、B 站、思科、太极图形等企业的选手
              </strong>
              ，也有来自清华大学、北京邮电大学、华东师范大学、浙江理工大学、新加坡国立大学等高校的学生。选手们围绕着
              TiDB 产品组和应用组两大赛道，展开了一场技术的比拼和创意的碰撞。
            </p>
            <p>
              Hackathon，即“黑客马拉松”，是程序员非常喜闻乐见的赛事活动。它有着自由的形式：Hacker
              们聚集在一起，紧密合作，发挥创意，持续编程，实现创想。编程马拉松的精髓在于：
              <strong>一群志同道合的伙伴，在特定的时间内，相聚在一起，去做他们想做的事情</strong>
              ——整个编程的过程几乎没有任何限制。
            </p>
            <p>
              在两天一夜的 Hacking Time 后，选手们进行了精彩的展示，开发者们对 TiDB 的理解和使用越来越纯熟，Hackathon
              的质量也在不断进化。本次{' '}
              <strong>
                有 16 支队伍瓜分了总计 35 万元的奖金，其中有 10 支队伍分获最佳创意奖、公益贡献奖、技术趋势奖、Cloud
                应用生态奖、最佳人气奖、最佳校园奖、用户之选奖。
              </strong>
            </p>
          </Styled.IntroContent>
        </Styled.Intro>

        <div
          style={{
            backgroundImage: `url(${backgroundCornerSkyblueImage.src})`,
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Styled.ThemeRace>
            <SectionTitle>主题赛道</SectionTitle>
            <Styled.ThemeRaceBody>
              <ThemeRace data={dataThemeRace} />
            </Styled.ThemeRaceBody>
          </Styled.ThemeRace>

          <Styled.WinnerTeam>
            <SectionTitle icon={<TitleWinnerIcon />}>获奖团队</SectionTitle>
            <Styled.WinnerTeamBody>
              <WinnerTeam data={dataWinnerTeam} />
            </Styled.WinnerTeamBody>
          </Styled.WinnerTeam>

          <Styled.CompetitionProcess>
            <SectionTitle icon={<TitleCornerSkyBlueIcon />}>参赛流程</SectionTitle>
            <Styled.CompetitionProcessBody>
              <CompetitionProcess />
            </Styled.CompetitionProcessBody>
          </Styled.CompetitionProcess>
        </div>

        <div
          style={{
            backgroundImage: `url(${backgroundCornerGreenImage.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
          }}
        >
          <Styled.Prize id={'prize'}>
            <SectionTitle icon={<TitleCloudDeepBlue />}>大赛奖项</SectionTitle>
            <Styled.PrizeBody>
              <Prize data={dataPrize} />
            </Styled.PrizeBody>
          </Styled.Prize>

          <Styled.ParticipationWelfare>
            <SectionTitle>其他参赛福利</SectionTitle>
            <Styled.ParticipationWelfareBody>
              <ParticipationWelfare data={dataParticipationWelfare} />
            </Styled.ParticipationWelfareBody>
          </Styled.ParticipationWelfare>
        </div>

        <div
          style={{
            backgroundImage: `url(${backgroundCornerBlueImage.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
          }}
        >
          <Styled.Judge id={'judges'}>
            <SectionTitle icon={<TitleCornerGreenIcon />}>评委导师阵容</SectionTitle>
            <Styled.JudgeDescription>按姓名字母排序</Styled.JudgeDescription>
            <Styled.JudgeBody>
              <Judge data={dataJudge} />
            </Styled.JudgeBody>
          </Styled.Judge>

          <Styled.FAQ id={'faq'}>
            <SectionTitle icon={<TitleCubeSkyBlueIcon />}>FAQ</SectionTitle>
            <Styled.FAQBody>
              <FAQ data={dataFAQ} />
            </Styled.FAQBody>
          </Styled.FAQ>
        </div>

        <div
          style={{
            backgroundImage: `url(${backgroundCornerSkyblueReverseImage.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
          }}
        >
          <Styled.Partner id={'partner'}>
            <SectionTitle icon={<TitleCubeOrangeIcon />}>赞助商与合作伙伴</SectionTitle>
            <Styled.PartnerBody>
              <Partner data={dataPartner} />
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
