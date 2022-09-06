import * as React from 'react';
import type { NextPage } from 'next';
import { Tooltip } from 'antd';
import Image from 'next/image';

import { CoreLayout } from '~/layouts';
import { CommunityHead } from '~/components';
import { getI18nProps } from '~/utils/i18n.utils';

import * as Styled from './index.styled';
import * as StyledHeader from './Header/index.styled';
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
import Prize from './Prize';
import ParticipationWelfare from './ParticipationWelfare';
import Icon0 from './ParticipationWelfare/icon-0.svg';
import Icon1 from './ParticipationWelfare/icon-1.svg';
import Icon2 from './ParticipationWelfare/icon-2.svg';
import Icon3 from './ParticipationWelfare/icon-3.svg';
import Icon4 from './ParticipationWelfare/icon-4.svg';
import Icon5 from './ParticipationWelfare/icon-5.svg';
import Judge from './Judge';
import AvatarImage from './Judge/avatar.png';
import FAQ from './FAQ';
import Partner from './Partner';
import PastReview from './PastReview';
import Anchor from '~/components/Anchor';
import ArrowLink from '~/components/ArrowLink';
import { askCompetitionUrl, signUpFormUrl } from './data';
import qrCodeImage from './Header/qrcode.png';

const description =
  '本次 Hackathon 主题为「Possibility at Scale」，打破传统技术边界，突破固有思维局限，用 TiDB 释放创新的更多可能性。';

const seo = {
  title: 'TiDB Hackathon 2022',
  description,
  keywords: ['黑客马拉松', 'TiDB', 'Hackathon'],
};

const dataHeader = {
  buttonItems: [
    {
      children: (
        <StyledHeader.HeaderStartButtonSignUp href={signUpFormUrl}>立即报名</StyledHeader.HeaderStartButtonSignUp>
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
            <Anchor href={askCompetitionUrl}>我要咨询</Anchor>
          </ArrowLink>
        </StyledHeader.HeaderStartButtonAsk>
      ),
    },
  ],
  navItems: [
    { children: '介  绍', href: '#intro' },
    { children: '奖  项', href: '#prize' },
    { children: '评  委', href: '#judges' },
    { children: '常见问题', href: '#faq' },
    { children: '合作伙伴', href: '#partner' },
  ],
};

const dataThemeRace = [
  {
    color: '#F67200',
    name: '应用组',
    body: '以体现 TiDB 产品价值为主，基于 TiDB 之上实现代码开源的产品、工具、应用等均可。部署方式上，更推荐基于 Cloud 构建 TiDB 相关应用。',
  },
  {
    color: '#00CF71',
    name: 'TiDB 产品组',
    body: '为 TiDB 内核产品以及 TiCDC、TiDB Lightning、TiUP 等周边工具的性能、稳定性、易用性或功能等各方面做出提升。',
  },
];

const dataPrize = {
  top: [
    { name: '冠军', thing: '¥ 50,000', target: '1 支队伍 / 赛道' },
    { name: '亚军', thing: '¥ 25,000', target: '2 支队伍 / 赛道' },
    { name: '季军', thing: '¥ 15,000', target: '3 支队伍 / 赛道' },
  ],
  onlyApplicationGroup: [
    { name: '最佳创意奖', thing: '¥ 5,000', target: '1 支队伍' },
    { name: '公益贡献奖', thing: '¥ 5,000', target: '1 支队伍' },
    { name: '技术趋势奖', thing: '¥ 5,000', target: '1 支队伍' },
    { name: 'Cloud 应用生态奖（API）', thing: '¥ 5,000', target: '1 支队伍' },
  ],
  applicationAndTiDBProductGroup: [
    { name: '最佳人气奖', thing: '键鼠套装 / 人 ', target: '1 支队伍 / 赛道' },
    { name: '最佳校园奖', thing: '¥ 5,000', target: '1 支队伍 / 赛道' },
    { name: '用户之选奖', thing: '¥ 5,000', target: '1 支队伍 / 赛道' },
  ],
  footer: <>注：所有奖项奖金均为税前金额，奖项评选规则可参考<Anchor href={'https://asktug.com/t/topic/273513'}>评分规则</Anchor>。</>,
};

const dataParticipationWelfare = [
  { icon: <Icon0 />, text: '专业导师赛前辅导' },
  { icon: <Icon1 />, text: '技术同好现场交流' },
  { icon: <Icon2 />, text: '评委大咖深度点评' },
  { icon: <Icon3 />, text: '万元丰厚现金奖励' },
  { icon: <Icon4 />, text: '参赛专属周边礼包' },
  { icon: <Icon5 />, text: '优秀项目多重曝光' },
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
      question: '1. 每支参赛队伍最多几个人？',
      answer: (
        <ul>
          <li>团队参赛最多 4 人为一个小组。单人参赛也支持哦～</li>
        </ul>
      ),
    },
    {
      question: '2. 没有队友怎么办？',
      answer: (
        <ul>
          <li>可以在社区链接（跳转链接）发布寻找队友、自我推荐，找到团队缺少的队友，也可以找到合适的队伍加入。</li>
        </ul>
      ),
    },
    {
      question: '3. 想不到好的创意想法怎么办？',
      answer: (
        <ul>
          <li>锁定 9 月 17 日宇宙漫游预备营，听听资深架构师们的创意想法，找到属于你的灵感</li>
          <li>也可以在社区链接（跳转链接）看看社区开发者们的想法，激发你的创意</li>
        </ul>
      ),
    },
    {
      question: '4. 主办方提供餐饮和住宿吗？',
      answer: (
        <ul>
          <li>
            我们提供参赛者和志愿者比赛期间的餐饮（两份午餐、一份早餐、两份晚餐），参赛选手可留在比赛场地过夜，如需在场地附近租住宾馆请自行解决～
          </li>
        </ul>
      ),
    },
    {
      question: '5. 比赛会由于疫情取消吗？',
      answer: (
        <ul>
          <li>我们会密切关注疫情动向，如有不可抗力则比赛会改为全程线上，不会取消哦～</li>
        </ul>
      ),
    },
    {
      question: '6. 会场分别在哪些城市？',
      answer: (
        <ul>
          <li>上海、北京、广州、成都、新加坡，上述地区进入决赛队伍超过五组时，该场地将开启线下会场。</li>
        </ul>
      ),
    },
    {
      question: '7. 什么时候可以开始编写代码？',
      answer: (
        <ul>
          <li>
            决赛现场
            coding。本次活动不允许偷跑哟，决赛现场评委会严格审查参赛选手的作品是否符合“第一行代码提交时间需在初赛结果公示后”这一规则。
          </li>
          <li>
            如果遇到学习资料中尚未解答的问题，可以加入 Hackathon 2022
            参赛群，群内将有导师不定期线上答疑，以及集中直播分享。
          </li>
        </ul>
      ),
    },
    {
      question: '8. 最佳校园奖参与评奖的人群是？',
      answer: (
        <ul>
          <li>团队成员需要全员皆为：在校本科生、硕士研究生、博士研究生。</li>
        </ul>
      ),
    },
    {
      question: '9. 报名参赛就可以获得本次获得的参赛大礼包吗？',
      answer: (
        <ul>
          <li>参赛开发者需要提交 RFC 后，RFC 通过初审，进入决赛就可以现场领取参赛大礼包哟～</li>
        </ul>
      ),
    },
  ],
  footer: (
    <>
      更多问答，请点击<Anchor href={askCompetitionUrl}>赛事 FAQ</Anchor>
    </>
  ),
};

const dataPartner = [
  {
    name: '赞助方',
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
    name: '云资源赞助/云技术服务支持',
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
    name: '协办方',
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
    name: '合作伙伴',
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

const Hackathon2022: NextPage = () => {
  return (
    <CoreLayout>
      <CommunityHead title={seo.title} description={seo.description} keyword={seo.keywords} />

      <Styled.MyContainer>
        <Header data={dataHeader} />

        <Styled.Intro id={'intro'}>
          <SectionTitle icon={<TitleCubeOrangeIcon />}>大赛介绍</SectionTitle>
          <Styled.IntroContent>{description}</Styled.IntroContent>
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
            <SectionTitle icon={<TitleCubeOrangeIcon />}>合作伙伴</SectionTitle>
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
