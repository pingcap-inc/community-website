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
import ChuangPeiHanImage from './Judge/avatar/Chuang Pei-Han-特约嘉宾.png';
import 陈昱Image from './Judge/avatar/陈昱.png';
import 高斌Image from './Judge/avatar/高斌.png';
import 郭磊涛Image from './Judge/avatar/郭磊涛.png';
import 黄东旭Image from './Judge/avatar/黄东旭.png';
import 黄潇Image from './Judge/avatar/黄潇.png';
import 李雨来Image from './Judge/avatar/李雨来.png';
import 刘聪Image from './Judge/avatar/刘聪.png';
import 刘子东Image from './Judge/avatar/刘子东.png';
import 马洪宾Image from './Judge/avatar/马洪宾.png';
import 沈旸Image from './Judge/avatar/沈旸.png';
import 孙晓光Image from './Judge/avatar/孙晓光.png';
import 唐刘Image from './Judge/avatar/唐刘.png';
import 王聪Image from './Judge/avatar/王聪.png';
import 吴海燕Image from './Judge/avatar/吴海燕.png';
import 谢孟军Image from './Judge/avatar/谢孟军.png';
import 徐成选Image from './Judge/avatar/徐成选.png';
import 张东晖Image from './Judge/avatar/张东晖.png';
import FAQ from './FAQ';
import Partner from './Partner';
import PastReview from './PastReview';
import Anchor from '~/components/Anchor';
import ArrowLink from '~/components/ArrowLink';
import {
  askCompetitionUrl,
  scoreRule,
  signUpFormUrl,
  joinGroupHelpUrl,
  liveUrl,
  ideaUrl,
  studyResourceUrl,
  RfcSubmitFormUrl,
} from './data';
import qrCodeImage from './Header/qrcode.jpg';
import SideBar from './SideBar';
import { getImageUrl } from '~/utils/cdn.utils';

const description =
  'TiDB Hackathon 2022 「Possibility at Scale」来啦，期待与你一起打破传统技术边界，突破固有思维局限，用 TiDB 释放创新的更多可能性。';

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
        <Tooltip
          placement="bottomLeft"
          color={'#FFF'}
          trigger={['click', 'focus']}
          title={
            <div style={{ textAlign: 'center' }}>
              <Image {...qrCodeImage} alt={'扫码添加小助手进群，回复 2022 进群'} />
              <p style={{ color: '#000' }}>
                扫码添加小助手进群
                <br />
                回复 2022 进群
              </p>
            </div>
          }
        >
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
            <Anchor href={askCompetitionUrl}>赛事咨询</Anchor>
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
    body: '以体现 TiDB 产品价值为主，使用 TiDB 构建代码开源的产品、工具、应用等均可。部署方式上，更推荐基于 Cloud 构建 TiDB 相关应用。常见应用领域： 游戏、电商、金融科技、公益等',
  },
  {
    color: '#00CF71',
    name: 'TiDB 产品组',
    body: '为 TiDB 内核产品以及 TiCDC、TiDB Lightning、TiUP 等周边工具的性能、稳定性、易用性或功能等各方面做出提升。',
  },
];

const dataPrize = {
  topPrize: {
    description: (
      <>
        各赛道 <span style={{ color: '#00CF71' }}>Top 6</span> 均可获得现金
      </>
    ),
    items: [
      { name: '冠军', thing: '¥ 50,000', target: '1 支队伍 / 赛道' },
      { name: '亚军', thing: '¥ 25,000', target: '2 支队伍 / 赛道' },
      { name: '季军', thing: '¥ 15,000', target: '3 支队伍 / 赛道' },
    ],
  },
  prizes: [
    {
      name: '特别奖项',
      categories: [
        {
          name: '仅应用组',
          items: [
            {
              name: (
                <>
                  <div>最佳创意奖</div>
                  <div style={{ fontSize: 14, color: '#CCC' }}>由云启资本冠名赞助</div>
                </>
              ),
              thing: '¥ 5,000',
              target: '1 支队伍',
            },
            { name: '公益贡献奖', thing: '¥ 5,000', target: '1 支队伍' },
            {
              name: (
                <>
                  <div>技术趋势奖</div>
                  <div style={{ fontSize: 14, color: '#CCC' }}>由华创资本冠名赞助</div>
                </>
              ),
              thing: '¥ 5,000',
              target: '1 支队伍',
            },
            { name: 'Cloud 应用生态奖（API）', thing: '¥ 5,000', target: '1 支队伍' },
          ],
        },
        {
          name: '应用组 & TiDB 产品组',
          items: [
            {
              name: (
                <>
                  <div>最佳人气奖</div>
                  <div style={{ fontSize: 14, color: '#CCC' }}>由 GGV 资本冠名赞助</div>
                </>
              ),
              thing: '键鼠套装 / 人 ',
              target: '1 支队伍 / 赛道',
            },
            { name: '最佳校园奖', thing: '¥ 5,000', target: '1 支队伍 / 赛道' },
            { name: '用户之选奖', thing: '¥ 5,000', target: '1 支队伍 / 赛道' },
          ],
        },
      ],
    },
  ],
  footer: (
    <>
      注：所有奖项奖金均为税前金额，奖项评选规则可参考
      <Anchor href={scoreRule}>评分规则</Anchor>。
    </>
  ),
};

const dataParticipationWelfare = [
  { icon: <Icon0 />, text: '专业导师赛前辅导' },
  { icon: <Icon1 />, text: '技术同好现场交流' },
  { icon: <Icon2 />, text: '评委大咖专业指导' },
  { icon: <Icon3 />, text: '万元丰厚现金奖励' },
  { icon: <Icon4 />, text: '参赛专属周边礼包' },
  { icon: <Icon5 />, text: '优秀项目多重曝光' },
];

const dataJudge = [
  {
    avatar: 陈昱Image,
    name: '陈昱',
    title: '云启资本合伙人',
    quotation:
      '重点关注基础软件、大数据、云计算、智能驾驶和机器人等领域的投资。主导投资了 PingCAP、Zilliz、Jina AI、Singularity、TigerGraph、Cloudchef、元戎启行、擎朗智能、智齿科技、德风科技、新石器、一造机器人等优秀企业。',
  },
  {
    avatar: ChuangPeiHanImage,
    name: (
      <>
        <div>Chuang Pei-Han</div>
        <div style={{ color: '#00CF71' }}>（特约专项评委）</div>
      </>
    ),
    title: 'Morpheus Labs CEO',
    quotation:
      'A serial entrepreneur with years of experience in business development, product marketing and partnership management. He has successfully raised series of fundings for his businesses, including a USD 7 digits seed funding round. One of the earliest adopters of blockchain technology\n',
  },
  {
    avatar: 高斌Image,
    name: '高斌',
    title: 'PingCAP 数据平台产品负责人',
    quotation: '数据库领域从业20年老兵，对于关系型数据库相关领域有深入了解。出版过专著《Oracle RAC 核心技术详解》',
  },
  {
    avatar: 郭磊涛Image,
    name: '郭磊涛',
    title: '爱奇艺数据库服务负责人',
    quotation: '目前致力于爱奇艺混合云数据库建设及云原生架构落地。',
  },
  {
    avatar: 黄东旭Image,
    name: '黄东旭',
    title: 'PingCAP 联合创始人兼 CTO',
    quotation:
      '资深基础软件工程师，架构师，曾就职于微软亚洲研究院，网易有道及豌豆荚，擅长分布式系统以及数据库开发，在分布式存储领域有丰富的经验和独到的见解。狂热的开源爱好者以及开源软件作者，代表作品分布式 Redis 缓存方案 Codis，以及分布式关系型数据库 TiDB。2015 年创业，成立 PingCAP，在 PingCAP 的主要工作是从零开始设计并研发开源 NewSQL 数据库 TiDB，目前 GitHub 上该项目累积 star 数超过 29000+，成为本领域全球顶级的开源项目。',
  },
  {
    avatar: 黄潇Image,
    name: '黄潇',
    title: 'PingCAP Outbound PM',
    quotation: '前美团 DBA Leader 和前 TUG 北京区 Leader，10+ 年 DBA、DevOps 经验',
  },
  {
    avatar: 李雨来Image,
    name: '李雨来',
    title: 'TiDB Committer, Seaweedfs Contributor',
    quotation: '',
  },
  {
    avatar: 刘聪Image,
    name: '刘聪',
    title: 'PingCAP 资深开发工程师',
    quotation: '15 年存储领域技术专家，加入 PingCAP 后在 TiKV 、PD 等领域深入精耕多年',
  },
  {
    avatar: 刘子东Image,
    name: '刘子东',
    title: '小米数据库工程师，TiDB Committer',
    quotation: '',
  },
  {
    avatar: 马洪宾Image,
    name: '马洪宾',
    organization: 'kyligence',
    title: 'Kyligence 技术合伙人，Apache Kylin 社区 PMC 成员',
    quotation: '',
  },
  {
    avatar: 沈旸Image,
    name: '沈旸',
    title: '联易融副总裁',
    quotation:
      '联易融副总裁，前神州数码集团副总裁兼 CIO。在集团数字化转型、SAP咨询、数字中台、营销私域运营、分布式数据库、开源 ERP、SAAS 等领域的开发管理工作有丰富的经验，领导 Tidb4PG 开源项目。',
  },
  {
    avatar: 孙晓光Image,
    name: '孙晓光',
    organization: 'PingCAP',
    title: 'TiDB Cloud Ecosystem 研发负责人',
    quotation: '',
  },
  {
    avatar: 唐刘Image,
    name: '唐刘',
    title: 'PingCAP 研发副总裁',
    quotation: 'TiDB Maintainer ，目前主要负责构建 TiDB Cloud。',
  },
  {
    avatar: 王聪Image,
    name: '王聪',
    title: 'PingCAP SQL 研发负责人',
    quotation: '',
  },
  {
    avatar: 吴海燕Image,
    name: '吴海燕',
    title: '华创资本管理合伙人',
    quotation: '负责华创资本基金管理工作，并牵头负责华创企业软件领域的投资，毕业于清华大学。',
  },
  {
    avatar: 谢孟军Image,
    name: '谢孟军',
    title: '积梦智能 CEO，GoCN 社区发起人',
    quotation: '',
  },
  {
    avatar: 徐成选Image,
    name: '徐成选',
    title: 'PingCAP DM 研发负责人',
    quotation: '10 年基础架构及数据平台研发经验，Kingshard 核心开发，Gaea（分库分表中间件）作者，TiDB ToC 成员',
  },
  {
    avatar: 张东晖Image,
    name: '张东晖',
    title: 'PingCAP 产研顾问',
    quotation:
      '曾在微软从事产品研发 15 年，之后在阿里云参与飞天、大数据平台、和云计算平台的开发和产品工作。经历了开源软件改变软件行业的历史，对开源社区和数据库、云计算、人工智能技术有持久的兴趣。',
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
          <li>
            可以在<Anchor href={joinGroupHelpUrl}>组队指南</Anchor>
            发布寻找队友、自我推荐，找到团队缺少的队友，也可以找到合适的队伍加入。
          </li>
        </ul>
      ),
    },
    {
      question: '3. 想不到好的创意想法怎么办？',
      answer: (
        <ul>
          <li>
            锁定 9 月 17 日「TiDB Hackathon 2022 非正式会谈 —
            东旭创意脑暴会」，听听资深架构师们的创意想法，找到属于你的灵感。<Anchor href={liveUrl}>预约直播</Anchor>
          </li>
          <li>
            也可以在<Anchor href={ideaUrl}>创意库</Anchor>看看社区开发者们的想法，激发你的创意
          </li>
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
          <li>
            上海、北京、广州、成都、新加坡，上述地区进入决赛队伍超过五组时，该场地将开启线下会场。欢迎就近现场参加。
          </li>
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
            如果遇到<Anchor href={studyResourceUrl}>学习资料</Anchor>
            中尚未解答的问题，可以添加小助手微信：dbasupport，加入 Hackathon 2022
            参赛群，群内将有导师不定期线上答疑，以及集中直播分享。
          </li>
        </ul>
      ),
    },
    {
      question: '8. 最佳校园奖参与评奖的人群是？',
      answer: (
        <ul>
          <li>团队成员需要全员皆为：在校本科生、硕士研究生、博士研究生，且进入决赛环节。</li>
        </ul>
      ),
    },
    {
      question: '9. 报名参赛就可以获得本次获得的参赛大礼包吗？',
      answer: (
        <ul>
          <li>参赛开发者需要提交 RFC 后，RFC 通过初审，进入决赛就可以现场领取参赛大礼包哟～</li>
          <li>
            <Anchor href={RfcSubmitFormUrl}>完成 RFC 提交</Anchor>，可参与抽奖 ：比赛开始后，将从特定时间段内成功提交
            RFC 的团队抽取若干支团队，送出 TiDB 社区神秘礼包
            <ul>
              <li>9/13 - 9/22 ：抽取 4 支</li>
              <li>9/22 - 9/30 ：抽取 3 支</li>
              <li>10/1 - 10/14：抽取 2 支</li>
            </ul>
          </li>
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

const imagePathPrefix = getImageUrl(`/images/hackathon2022`);

const 金牌赞助Items: { image: { src: string } }[] = [];
for (let i = 1; i <= 3; i++) 金牌赞助Items.push({ image: { src: `${imagePathPrefix}/partner/logo-1-${i}.png` } });

const 银牌赞助Items: { image: { src: string } }[] = [];
for (let i = 4; i <= 4; i++) 银牌赞助Items.push({ image: { src: `${imagePathPrefix}/partner/logo-1-${i}.png` } });

const 云资源赞助and云技术服务支持Items: { image: { src: string } }[] = [];
for (let i = 1; i <= 3; i++)
  云资源赞助and云技术服务支持Items.push({ image: { src: `${imagePathPrefix}/partner/logo-2-${i}.png` } });

const 协办方Items: { image: { src: string } }[] = [];
for (let i = 4; i <= 5; i++) 协办方Items.push({ image: { src: `${imagePathPrefix}/partner/logo-2-${i}.png` } });

const 合作社区Items: { image: { src: string } }[] = [];
for (let i = 1; i <= 37; i++) 合作社区Items.push({ image: { src: `${imagePathPrefix}/partner/logo-3-${i}.png` } });

const dataPartner = [
  {
    name: '金牌赞助',
    items: 金牌赞助Items,
  },
  {
    name: '银牌赞助',
    items: 银牌赞助Items,
  },
  {
    name: '云资源赞助/云技术服务支持',
    items: 云资源赞助and云技术服务支持Items,
  },
  {
    name: '协办方',
    items: 协办方Items,
  },
  {
    name: '合作社区',
    items: 合作社区Items,
  },
];

const Hackathon2022: NextPage = () => {
  return (
    <CoreLayout>
      <CommunityHead title={seo.title} description={seo.description} keyword={seo.keywords} />

      <SideBar />

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
