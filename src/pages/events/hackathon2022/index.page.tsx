import * as React from 'react';
import { Tooltip } from 'antd';
import Image from 'next/image';
import type { NextPage } from 'next';

import { CoreLayout } from '~/layouts';
import { CommunityHead } from '~/components';

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
import TitleWinnerIcon from './title-winner-icon.svg';
import pictureImage from './WinnerTeam/picture.jpg';
import WinnerTeam from './WinnerTeam';
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

import partnerLogo_1_1_Image from './Partner/logo/logo-1-1.png';
import partnerLogo_1_2_Image from './Partner/logo/logo-1-2.png';
import partnerLogo_1_3_Image from './Partner/logo/logo-1-3.png';
import partnerLogo_1_4_Image from './Partner/logo/logo-1-4.png';
import partnerLogo_2_1_Image from './Partner/logo/logo-2-1.png';
import partnerLogo_2_2_Image from './Partner/logo/logo-2-2.png';
import partnerLogo_2_3_Image from './Partner/logo/logo-2-3.png';
import partnerLogo_2_4_Image from './Partner/logo/logo-2-4.png';
import partnerLogo_2_5_Image from './Partner/logo/logo-2-5.png';
import partnerLogo_3_1_Image from './Partner/logo/logo-3-1.png';
import partnerLogo_3_2_Image from './Partner/logo/logo-3-2.png';
import partnerLogo_3_3_Image from './Partner/logo/logo-3-3.png';
import partnerLogo_3_4_Image from './Partner/logo/logo-3-4.png';
import partnerLogo_3_5_Image from './Partner/logo/logo-3-5.png';
import partnerLogo_3_6_Image from './Partner/logo/logo-3-6.png';
import partnerLogo_3_7_Image from './Partner/logo/logo-3-7.png';
import partnerLogo_3_8_Image from './Partner/logo/logo-3-8.png';
import partnerLogo_3_9_Image from './Partner/logo/logo-3-9.png';
import partnerLogo_3_10_Image from './Partner/logo/logo-3-10.png';
import partnerLogo_3_11_Image from './Partner/logo/logo-3-11.png';
import partnerLogo_3_12_Image from './Partner/logo/logo-3-12.png';
import partnerLogo_3_13_Image from './Partner/logo/logo-3-13.png';
import partnerLogo_3_14_Image from './Partner/logo/logo-3-14.png';
import partnerLogo_3_15_Image from './Partner/logo/logo-3-15.png';
import partnerLogo_3_16_Image from './Partner/logo/logo-3-16.png';
import partnerLogo_3_17_Image from './Partner/logo/logo-3-17.png';
import partnerLogo_3_18_Image from './Partner/logo/logo-3-18.png';
import partnerLogo_3_19_Image from './Partner/logo/logo-3-19.png';
import partnerLogo_3_20_Image from './Partner/logo/logo-3-20.png';
import partnerLogo_3_21_Image from './Partner/logo/logo-3-21.png';
import partnerLogo_3_22_Image from './Partner/logo/logo-3-22.png';
import partnerLogo_3_23_Image from './Partner/logo/logo-3-23.png';
import partnerLogo_3_24_Image from './Partner/logo/logo-3-24.png';
import partnerLogo_3_25_Image from './Partner/logo/logo-3-25.png';
import partnerLogo_3_26_Image from './Partner/logo/logo-3-26.png';
import partnerLogo_3_27_Image from './Partner/logo/logo-3-27.png';
import partnerLogo_3_28_Image from './Partner/logo/logo-3-28.png';
import partnerLogo_3_29_Image from './Partner/logo/logo-3-29.png';
import partnerLogo_3_30_Image from './Partner/logo/logo-3-30.png';
import partnerLogo_3_31_Image from './Partner/logo/logo-3-31.png';
import partnerLogo_3_32_Image from './Partner/logo/logo-3-32.png';
import partnerLogo_3_33_Image from './Partner/logo/logo-3-33.png';
import partnerLogo_3_34_Image from './Partner/logo/logo-3-34.png';
import partnerLogo_3_35_Image from './Partner/logo/logo-3-35.png';
import partnerLogo_3_36_Image from './Partner/logo/logo-3-36.png';
import partnerLogo_3_37_Image from './Partner/logo/logo-3-37.png';
import partnerLogo_3_38_Image from './Partner/logo/logo-3-38.png';

const description =
  '本届大赛主题为「Possibility at Scale」，规模创历史之最，共有 303 名选手报名 ，86 支队伍参赛，有来自微软、蚂蚁集团、字节跳动、网易有道、浪潮、明朝万达、B 站、思科、太极图形等企业的选手，也有来自清华大学、北京邮电大学、华东师范大学、浙江理工大学、新加坡国立大学等高校的学生。选手们围绕着 TiDB 产品组和应用组两大赛道，展开了一场技术的比拼和创意的碰撞。';

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

const dataWinnerTeam = {
  application: {
    name: '应用组',
    color: '#F67200',
    items: [
      {
        pictureImage: pictureImage,
        githubLink: '#',
        playbackLink: '#',
        rfcLink: '#',
        name: '图一乐',
        description: 'Data Dance，Try TiDB online~',
        prize: '一等奖 + 用户之选奖',
        bonus: '"奖金 ¥50,000',
      },
      {
        pictureImage: pictureImage,
        githubLink: '#',
        playbackLink: '#',
        rfcLink: '#',
        name: '不上班你养我啊',
        description: '云迹，解决企业在云上部署架构下统一成本分析、关键指标监控告警的问题',
        prize: '二等奖 + 最佳人气奖"',
        bonus: '奖金 ¥50,000 + 奖金 ¥5,000',
      },
      {
        pictureImage: pictureImage,
        githubLink: '#',
        playbackLink: '#',
        rfcLink: '#',
        name: '6c0c6375-462b-4320-9af2-03593d55b227',
        description: 'Mirror-魔镜，不用写复杂 SQL 就可以简单获得分析结果',
        prize: '"二等奖 + 最佳创意奖',
        bonus: '奖金 ¥25,000 + 键鼠套装/人',
      },
      {
        pictureImage: pictureImage,
        githubLink: '#',
        playbackLink: '#',
        rfcLink: '#',
        name: 'cloud naive',
        description: 'My Life，记录我们的生活轨迹，存储到 TiDB 中，最终以各种方式展现',
        prize: '三等奖',
        bonus: '奖金 ¥25,000 + 奖金 ¥5,000',
      },
      {
        pictureImage: pictureImage,
        githubLink: '#',
        playbackLink: '#',
        rfcLink: '#',
        name: '一天一个项目',
        description:
          'HTAP Charts，在 TiDB 层设计与实现 charts 组件， 用户可以基于配置和拖拽的方式生成自己的图表，然后在网站上获取相应图标的 iframe 代码，嵌入至自己的应用内即完成了图表的相关构建',
        prize: '三等奖',
        bonus: '奖金 ¥15,000',
      },
      {
        pictureImage: pictureImage,
        githubLink: '#',
        playbackLink: '#',
        rfcLink: '#',
        name: '敲代码不喊我是吧',
        description: 'TiCat，项目着眼于实现从 MySQL 迁移到 TiDB 的迁移校验工具',
        prize: '+ 三等奖 + 最佳校园奖"',
        bonus: '奖金 ¥15,000 + 奖金 ¥5,000',
      },
      {
        pictureImage: pictureImage,
        githubLink: '#',
        playbackLink: '#',
        rfcLink: '#',
        name: '莫慌！有我！',
        description: 'NFTips，直接使用公链数据对 NFT 数字藏品的“一生”做可视化分析',
        prize: '区块链专项奖 + 技术趋势奖',
        bonus: '奖金 ¥10,000 + 奖金 ¥5,000',
      },
      {
        pictureImage: pictureImage,
        githubLink: '#',
        playbackLink: '#',
        rfcLink: '#',
        name: '贵司贵组',
        description:
          'TiDB Cloud VS Code extension，用 VS Code 直接管理 TiDB Cloud cluster，赋能开发者进行一站式数据处理和应用开发',
        prize: 'Cloud 应用生态奖',
        bonus: '奖金 ¥5,000',
      },
    ],
  },
  production: {
    name: 'TiDB 产品组',
    color: '#00CF71',
    items: [
      {
        pictureImage: pictureImage,
        githubLink: '#',
        playbackLink: '#',
        rfcLink: '#',
        name: '摸鱼就是',
        description: 'Double My QPS，一键变强',
        prize: '一等奖',
        bonus: '奖金 ¥50,000',
      },
      {
        pictureImage: pictureImage,
        githubLink: '#',
        playbackLink: '#',
        rfcLink: '#',
        name: '我垫你们蹲',
        description: 'TiFlash Collocated Optimization，TiFlash 支持 Collocated Join',
        prize: '二等奖',
        bonus: '奖金 ¥25,000',
      },
      {
        pictureImage: pictureImage,
        githubLink: '#',
        playbackLink: '#',
        rfcLink: '#',
        name: '12只喵',
        description: 'MoreCat，让所有人都能通过 tiup 个人镜像向 TiDB 贡献组件，打造组件市场的雏形',
        prize: '二等奖',
        bonus: '奖金 ¥25,000',
      },
      {
        pictureImage: pictureImage,
        githubLink: '#',
        playbackLink: '#',
        rfcLink: '#',
        name: 'TiFancy',
        description:
          'Fast at Scale，受 OSSInsight.io 启发，加强 TiDB HTAP 中对于 AP 请求的 Serving 能力，通过补全 AP 的 Serving 能力，让类似 OSSInsight 这类的 DaaS 应用直接受益，为用户从海量数据中获取实时精准的业务洞察',
        prize: '三等奖',
        bonus: '奖金 ¥15,000',
      },
      {
        pictureImage: pictureImage,
        githubLink: '#',
        playbackLink: '#',
        rfcLink: '#',
        name: '彦青说得队',
        description: 'Optimizer trace，对 TiDB 优化器决策过程进行可视化展示',
        prize: '三等奖 + 用户之选奖',
        bonus: '奖金 ¥15,000 + 奖金 ¥5,000',
      },
      {
        pictureImage: pictureImage,
        githubLink: '#',
        playbackLink: '#',
        rfcLink: '#',
        name: '鸡你太美',
        description: '"Sibyl is an Easier-to-use SQL Diagnostics tool for TiDB，',
        prize: '三等奖',
        bonus: '奖金 ¥15,000',
      },
      {
        name: '热点清零',
        description: '小白也能用的 SQL 优化工具"',
        prize: '最佳校园奖',
        bonus: '奖金 ¥5,000',
      },
      {
        pictureImage: pictureImage,
        githubLink: '#',
        playbackLink: '#',
        rfcLink: '#',
        name: '黑马警长',
        description:
          'Fearless Write Hotspot，采用 bottom-up 设计思路，从更好地利用 CPU、磁盘等资源的角度出发，自底向上解决 TiKV 的写热点问题',
        prize: '最佳人气奖',
        bonus: '键鼠套装/人',
      },
    ],
  },
};

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

const dataPartner = [
  {
    name: '金牌赞助',
    items: [{ image: partnerLogo_1_1_Image }, { image: partnerLogo_1_2_Image }, { image: partnerLogo_1_3_Image }],
  },
  {
    name: '银牌赞助',
    items: [{ image: partnerLogo_1_4_Image }],
  },
  {
    name: '云资源赞助/云技术服务支持',
    items: [{ image: partnerLogo_2_1_Image }, { image: partnerLogo_2_2_Image }, { image: partnerLogo_2_3_Image }],
  },
  {
    name: '协办方',
    items: [{ image: partnerLogo_2_4_Image }, { image: partnerLogo_2_5_Image }],
  },
  {
    name: '合作社区',
    items: [
      { image: partnerLogo_3_1_Image },
      { image: partnerLogo_3_2_Image },
      { image: partnerLogo_3_3_Image },
      { image: partnerLogo_3_4_Image },
      { image: partnerLogo_3_5_Image },
      { image: partnerLogo_3_6_Image },
      { image: partnerLogo_3_7_Image },
      { image: partnerLogo_3_8_Image },
      { image: partnerLogo_3_9_Image },
      { image: partnerLogo_3_10_Image },
      { image: partnerLogo_3_11_Image },
      { image: partnerLogo_3_12_Image },
      { image: partnerLogo_3_13_Image },
      { image: partnerLogo_3_14_Image },
      { image: partnerLogo_3_15_Image },
      { image: partnerLogo_3_16_Image },
      { image: partnerLogo_3_17_Image },
      { image: partnerLogo_3_18_Image },
      { image: partnerLogo_3_19_Image },
      { image: partnerLogo_3_20_Image },
      { image: partnerLogo_3_21_Image },
      { image: partnerLogo_3_22_Image },
      { image: partnerLogo_3_23_Image },
      { image: partnerLogo_3_24_Image },
      { image: partnerLogo_3_25_Image },
      { image: partnerLogo_3_26_Image },
      { image: partnerLogo_3_27_Image },
      { image: partnerLogo_3_28_Image },
      { image: partnerLogo_3_29_Image },
      { image: partnerLogo_3_30_Image },
      { image: partnerLogo_3_31_Image },
      { image: partnerLogo_3_32_Image },
      { image: partnerLogo_3_33_Image },
      { image: partnerLogo_3_34_Image },
      { image: partnerLogo_3_35_Image },
      { image: partnerLogo_3_36_Image },
      { image: partnerLogo_3_37_Image },
      { image: partnerLogo_3_38_Image },
    ],
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
