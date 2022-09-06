import * as React from 'react';
import type { NextPage } from 'next';
import { Tooltip } from 'antd';
import Image from 'next/image';

import { CoreLayout } from '~/layouts';
import { CommunityHead } from '~/components';
import { getI18nProps } from '~/utils/i18n.utils';

import * as Styled from '../index.styled';
import * as StyledHeader from '../Header/index.styled';
import SectionTitle from '../SectionTitle';
import TitleCubeOrangeIcon from '../title_icon_cube_orange.svg';
import TitleCornerSkyBlueIcon from '../title_icon_corner_skyblue.svg';
import TitleCornerGreenIcon from '../title_icon_corner_green.svg';
import TitleCubeSkyBlueIcon from '../title_icon_cube_skyblue.svg';
import TitleCloudDeepBlue from '../title_icon_cloud_deepblue.svg';
import backgroundCornerSkyblueImage from '../background_corner_skyblue.png';
import backgroundCornerGreenImage from '../background_corner_green.png';
import backgroundCornerBlueImage from '../background_corner_blue.png';
import backgroundCornerSkyblueReverseImage from '../background_corner_skyblue_reverse.png';
import Header from '../Header';
//import ThemeRace from '../ThemeRace';
import CompetitionProcess from '../CompetitionProcess';
import Prize from '../Prize';
import ParticipationWelfare from '../ParticipationWelfare';
import Icon0 from '../ParticipationWelfare/icon-0.svg';
import Icon1 from '../ParticipationWelfare/icon-1.svg';
import Icon2 from '../ParticipationWelfare/icon-2.svg';
import Icon3 from '../ParticipationWelfare/icon-3.svg';
import Icon4 from '../ParticipationWelfare/icon-4.svg';
import Icon5 from '../ParticipationWelfare/icon-5.svg';
import Judge from '../Judge';
import AvatarImage from '../Judge/avatar.png';
import FAQ from '../FAQ';
import Partner from '../Partner';
import PastReview from '../PastReview';
import Anchor from '~/components/Anchor';
import ArrowLink from '~/components/ArrowLink';
import qrCodeImage from '../Header/qrcode.png';
import { signUpFormUrl, askCompetitionUrl } from './data';

const description =
  'Welcome to TiDB Hackathon 2022, "Possibility at Scale." This year, our Hackathon goals are to break the boundaries of traditional technologies, expand our thinking, and use TiDB to unlock more possibilities for innovation.';

const seo = {
  title: 'TiDB Hackathon 2022',
  description,
  keywords: ['黑客马拉松', 'TiDB', 'Hackathon'],
};

const dataHeader = {
  buttonItems: [
    {
      children: (
        <StyledHeader.HeaderStartButtonSignUp href={signUpFormUrl}>Register now</StyledHeader.HeaderStartButtonSignUp>
      ),
    },
    {
      children: (
        <Tooltip placement="bottomLeft" color={'#FFF'} trigger={['click', 'focus']} title={<Image {...qrCodeImage} />}>
          <StyledHeader.HeaderStartButtonJoinGroup>
            <ArrowLink>加入官方群</ArrowLink>
          </StyledHeader.HeaderStartButtonJoinGroup>
        </Tooltip>
      ),
    },
    {
      children: (
        <StyledHeader.HeaderStartButtonAsk>
          <ArrowLink>
            <Anchor href={askCompetitionUrl}>Learn more</Anchor>
          </ArrowLink>
        </StyledHeader.HeaderStartButtonAsk>
      ),
    },
  ],
  navItems: [
    { children: 'Overview', href: '#intro' },
    { children: 'Prizes', href: '#prize' },
    { children: 'Judges', href: '#judges' },
    { children: 'FAQs', href: '#faq' },
    { children: 'Supporters', href: '#partner' },
  ],
};

//const dataThemeRace = [
//  {
//    color: '#F67200',
//    name: '应用组',
//    body: '以体现 TiDB 产品价值为主，基于 TiDB 之上实现代码开源的产品、工具、应用等均可。部署方式上，更推荐基于 Cloud 构建 TiDB 相关应用。',
//  },
//  {
//    color: '#00CF71',
//    name: 'TiDB 产品组',
//    body: '为 TiDB 内核产品以及 TiCDC、TiDB Lightning、TiUP 等周边工具的性能、稳定性、易用性或功能等各方面做出提升。',
//  },
//];

const dataPrize = {
  topPrize: {
    description: (
      <>
        <span style={{ color: '#00CF71' }}>Top six</span> winners will receive cash prizes
      </>
    ),
    items: [
      { name: '1st Prize', thing: 'S$ 10,000', target: 'one team' },
      { name: '2nd Prize', thing: 'S$ 5,000', target: 'two teams' },
      { name: '3rd Prize', thing: 'S$ 3,000', target: 'three teams' },
    ],
  },
  prizes: [
    {
      name: 'Special awards',
      categories: [
        {
          //name: '仅应用组',
          items: [
            { name: 'Web3 Special Award', thing: 'S$ 2,000', target: '(one team)' },
            { name: 'Best Creative Award', thing: 'S$ 1,000', target: '(one team)' },
            { name: 'Public Welfare Contribution Award', thing: 'S$ 1,000', target: '(one team)' },
            { name: 'Technology Trends Award', thing: 'S$ 1,000', target: '(one team)' },
            { name: 'TiDB Cloud Application (API) Award', thing: 'S$ 1,000', target: '(one team)' },
            {
              name: 'Best Popularity Award',
              thing: 'one set of keyboard and mouse for each team member',
              target: '(one team)',
            },
            { name: 'Best Campus Award', thing: 'S$ 1,000', target: '(one team)' },
            { name: "Users' Choice Award", thing: 'S$ 1,000', target: '(one team)' },
          ],
        },
      ],
    },
  ],
  footer: (
    <>
      <p>Please note that we'll issue the prize money according to the exchange rate. Taxes are not included.</p>
      <p>
        See evaluation criteria. <Anchor href={'https://asktug.com/t/topic/273513'} />
      </p>
    </>
  ),
};

const dataParticipationWelfare = [
  { icon: <Icon0 />, text: 'Professional mentorship' },
  { icon: <Icon1 />, text: 'On-site communication with tech enthusiasts' },
  { icon: <Icon2 />, text: 'Professional guidance from seasoned judges' },
  { icon: <Icon3 />, text: 'Substantial prize money' },
  { icon: <Icon4 />, text: 'Contestant-exclusive swag bag' },
  { icon: <Icon5 />, text: 'Branding exposures for excellent projects' },
];

const dataJudge = [
  {
    avatar: AvatarImage,
    name: '刘奇',
    title: 'PingCAP ｜ 创始人兼CEO',
    quotation: '这里有超多创意，资深架构师在线脑暴，超多 idea ，你的灵感来源之一',
  },
  {
    avatar: AvatarImage,
    name: '刘奇',
    title: 'PingCAP ｜ 创始人兼CEO',
    quotation: '这里有超多创意，资深架构师在线脑暴，超多 idea ，你的灵感来源之一',
  },
  {
    avatar: AvatarImage,
    name: '刘奇',
    title: 'PingCAP ｜ 创始人兼CEO',
    quotation:
      '这里有超多创意，资深架构师在线脑暴，超多 idea ，你的灵感来源之一这里有超多创意，资深架构师在线脑暴，超多 idea ，你的灵感来源之一这里有超多创意，资深架构师在线脑暴，超多 idea ，你的灵感来源之一这里有超多创意，资深架构师在线脑暴，超多 idea ，你的灵感来源之一',
  },
  {
    avatar: AvatarImage,
    name: '刘奇',
    title: 'PingCAP ｜ 创始人兼CEO',
    quotation: '这里有超多创意，资深架构师在线脑暴，超多 idea ，你的灵感来源之一',
  },
  {
    avatar: AvatarImage,
    name: '刘奇',
    title: 'PingCAP ｜ 创始人兼CEO',
    quotation: '这里有超多创意，资深架构师在线脑暴，超多 idea ，你的灵感来源之一',
  },
  {
    avatar: AvatarImage,
    name: '刘奇',
    title: 'PingCAP ｜ 创始人兼CEO',
    quotation: '这里有超多创意，资深架构师在线脑暴，超多 idea ，你的灵感来源之一',
  },
];

const dataFAQ = {
  items: [
    {
      question: '1. How many team members can we have in each team?',
      answer: (
        <ul>
          <li>You can have at most four members in your team. You can also join the contest alone.</li>
        </ul>
      ),
    },
    {
      question: '2. What can I do to find my teammates?',
      answer: (
        <ul>
          <li>You can post in the community to find teammates or recommend yourself as a team member.</li>
        </ul>
      ),
    },
    {
      question: "3. What should I do if I can't think of a creative idea?",
      answer: (
        <ul>
          <li>You can see the ideas of community developers in the community to get inspiration.</li>
        </ul>
      ),
    },
    {
      question: '4. Does the host provide meals and accommodation?',
      answer: (
        <ul>
          <li>
            We provide catering (one breakfast, two lunches, and two dinners) for contestants and volunteers during the
            final. You can stay at the PingCAP office overnight. If you want to live in a hotel nearby, please pay for
            it yourself.
          </li>
        </ul>
      ),
    },
    {
      question: '5. Will the final be cancelled due to the epidemic?',
      answer: (
        <ul>
          <li>
            We'll pay close attention to the trend of the epidemic. If we can't hold the final on site due to the
            epidemic, we won't cancel it and will hold it online.
          </li>
        </ul>
      ),
    },
    {
      question: '6. Where is the PingCAP office in Singapore?',
      answer: (
        <ul>
          <li>It's at 1 One North Crescent, Razer SEA HQ, Level 7, Singapore 138538</li>
        </ul>
      ),
    },
    {
      question: '7. When can I start writing code?',
      answer: (
        <ul>
          <li>
            <strong>You can't submit your first line of code until we announce the pre-selection results.</strong> The
            final jury will strictly check whether you meet this rule.
          </li>
          <li>
            If you have questions for the reference materials, you can join the Hackathon 2022 group, where our mentors
            will answer your questions online.
          </li>
        </ul>
      ),
    },
    {
      question: '8. Who are the candidates for the Web3 Special Award?',
      answer: (
        <ul>
          <li>If your project belongs to the Web3 field, you are eligible for the Web3 Special Award.</li>
        </ul>
      ),
    },
    {
      question: '9. What are the candidate requirements for the Best Campus Award?',
      answer: (
        <ul>
          <li>All team members should be undergraduate, master's, and doctoral students.</li>
        </ul>
      ),
    },
    {
      question: '10. Can we win a special award and a top 6 award at the same time?',
      answer: (
        <ul>
          <li>Yes.</li>
        </ul>
      ),
    },
    {
      question: '11. Can I get a swag bag by registering for the contest?',
      answer: (
        <ul>
          <li>After your RFC passes the pre-selection, you can get the swag bag at the final.</li>
        </ul>
      ),
    },
  ],
  footer: (
    <>
      See more <Anchor href={askCompetitionUrl}>Q&As</Anchor>
    </>
  ),
};

const dataPartner = [
  {
    name: 'Patron',
    items: [
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
    ],
  },
  {
    name: 'Co-patrons',
    items: [
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
    ],
  },
  {
    name: 'Partners',
    items: [
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
      { image: '' },
    ],
  },
];

const Hackathon2022Apac: NextPage = () => {
  return (
    <CoreLayout>
      <CommunityHead title={seo.title} description={seo.description} keyword={seo.keywords} />

      <Styled.MyContainer>
        <Header data={dataHeader} />

        <Styled.Intro id={'intro'}>
          <SectionTitle icon={<TitleCubeOrangeIcon />}>Overview</SectionTitle>
          <Styled.IntroContent>
            <p>{description}</p>
            <p>
              Would you like to join? You could demonstrate the value of TiDB by implementing open source products,
              tools, or applications based on TiDB in Web3, public welfare, games, and other fields. As for the
              deployment method, we recommend building TiDB-related applications based on TiDB Cloud.
            </p>
          </Styled.IntroContent>
        </Styled.Intro>

        <div
          style={{
            backgroundImage: `url(${backgroundCornerSkyblueImage.src})`,
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/*<Styled.ThemeRace>*/}
          {/*  <SectionTitle>主题赛道</SectionTitle>*/}
          {/*  <Styled.ThemeRaceBody>*/}
          {/*    <ThemeRace data={dataThemeRace} />*/}
          {/*  </Styled.ThemeRaceBody>*/}
          {/*</Styled.ThemeRace>*/}

          <Styled.CompetitionProcess>
            <SectionTitle icon={<TitleCornerSkyBlueIcon />}>Timeline (SGT)</SectionTitle>
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
            <SectionTitle icon={<TitleCloudDeepBlue />}>Prizes</SectionTitle>
            <Styled.PrizeBody>
              <Prize data={dataPrize} />
            </Styled.PrizeBody>
          </Styled.Prize>

          <Styled.ParticipationWelfare>
            <SectionTitle>Participation benefits</SectionTitle>
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
            <SectionTitle icon={<TitleCornerGreenIcon />}>Judges and mentors</SectionTitle>
            <Styled.JudgeBody>
              <Judge data={dataJudge} />
            </Styled.JudgeBody>
          </Styled.Judge>

          <Styled.FAQ id={'faq'}>
            <SectionTitle icon={<TitleCubeSkyBlueIcon />}>FAQs</SectionTitle>
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
            <SectionTitle icon={<TitleCubeOrangeIcon />}>Supporters</SectionTitle>
            <Styled.PartnerBody>
              <Partner data={dataPartner} />
            </Styled.PartnerBody>
          </Styled.Partner>

          <Styled.PastReview>
            <SectionTitle icon={<TitleCubeSkyBlueIcon />}>Previous TiDB Hackathons</SectionTitle>
            <Styled.PastReviewBody>
              <PastReview />
            </Styled.PastReviewBody>
          </Styled.PastReview>
        </div>
      </Styled.MyContainer>
    </CoreLayout>
  );
};

export default Hackathon2022Apac;

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
