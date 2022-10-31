import * as React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Tooltip } from 'antd';

import Anchor from '~/components/Anchor';
import ArrowLink from '~/components/ArrowLink';
import * as StyledHeader from './Header/index.styled';
//import pictureImage from './WinnerTeam/picture.jpg';
import productionGroup_0_Image from './WinnerTeam/pictures/production-0.jpg';
import productionGroup_1_Image from './WinnerTeam/pictures/production-1.jpg';
import productionGroup_2_Image from './WinnerTeam/pictures/production-2.jpg';
import productionGroup_3_Image from './WinnerTeam/pictures/production-3.jpg';
import productionGroup_4_Image from './WinnerTeam/pictures/production-4.jpg';
import productionGroup_5_Image from './WinnerTeam/pictures/production-5.jpg';
import productionGroup_6_Image from './WinnerTeam/pictures/production-6.jpg';
import productionGroup_7_Image from './WinnerTeam/pictures/production-7.jpg';
import applicationGroup_0_Image from './WinnerTeam/pictures/application-0.jpg';
import applicationGroup_1_Image from './WinnerTeam/pictures/application-1.jpg';
import applicationGroup_2_Image from './WinnerTeam/pictures/application-2.jpg';
import applicationGroup_3_Image from './WinnerTeam/pictures/application-3.jpg';
import applicationGroup_4_Image from './WinnerTeam/pictures/application-4.jpg';
import applicationGroup_5_Image from './WinnerTeam/pictures/application-5.jpg';
import applicationGroup_6_Image from './WinnerTeam/pictures/application-6.jpg';
import applicationGroup_7_Image from './WinnerTeam/pictures/application-7.jpg';
import Icon0 from './ParticipationWelfare/icon-0.svg';
import Icon1 from './ParticipationWelfare/icon-1.svg';
import Icon2 from './ParticipationWelfare/icon-2.svg';
import Icon3 from './ParticipationWelfare/icon-3.svg';
import Icon4 from './ParticipationWelfare/icon-4.svg';
import Icon5 from './ParticipationWelfare/icon-5.svg';
import 陈昱Image from './Judge/avatar/陈昱.png';
import ChuangPeiHanImage from './Judge/avatar/Chuang Pei-Han-特约嘉宾.png';
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
import qrCodeImage from './Header/qrcode.jpg';

export const signUpFormUrl = 'https://forms.pingcap.com/f/hackathon-2022';
export const joinGroupFormUrl = 'https://pingcap.feishu.cn/share/base/shrcnaTxgdc234p8s9ri0xCXM9g';
export const RfcSubmitFormUrl = 'https://pingcap.feishu.cn/share/base/shrcncryHdlnkf5GfwnvrkRQ64c';
export const RfcTemplateUrl = 'https://asktug.com/t/topic/903770';
export const guideUrl = 'https://asktug.com/t/topic/903772';
export const joinGroupHelpUrl = 'https://asktug.com/t/topic/903781';
export const pptTemplateUrl =
  'https://docs.google.com/presentation/d/1OcIpL5MEZPPbjiSnbpnqHPwoO1cE5nBBq2oyVllmQ_4/edit?usp=sharing';
export const askCompetitionUrl = 'https://asktug.com/c/Mutual-communication/Hackathon';
export const scoreRule = 'https://asktug.com/t/topic/933123';
export const liveUrl = 'https://live.bilibili.com/4630260';
export const replayUrl = 'https://asktug.com/t/topic/933124';
export const ideaUrl = 'https://asktug.com/t/topic/963200';
export const studyResourceUrl = 'https://asktug.com/t/topic/903772';

export const dataHeader = {
  buttonItems: [
    {
      children: <StyledHeader.HeaderStartButtonSignUp>报名已截止</StyledHeader.HeaderStartButtonSignUp>,
    },
    //{
    //  children: (
    //    <Tooltip
    //      placement="bottomLeft"
    //      color={'#FFF'}
    //      trigger={['click', 'focus']}
    //      title={
    //        <div style={{ textAlign: 'center' }}>
    //          <Image {...qrCodeImage} alt={'扫码添加小助手进群，回复 2022 进群'} />
    //          <p style={{ color: '#000' }}>
    //            扫码添加小助手进群
    //            <br />
    //            回复 2022 进群
    //          </p>
    //        </div>
    //      }
    //    >
    //      <StyledHeader.HeaderStartButtonJoinGroup>
    //        <ArrowLink>加入官方群</ArrowLink>
    //      </StyledHeader.HeaderStartButtonJoinGroup>
    //    </Tooltip>
    //  ),
    //},
    //{
    //  children: (
    //    <StyledHeader.HeaderStartButtonAsk>
    //      <ArrowLink>
    //        <Anchor href={askCompetitionUrl}>赛事咨询</Anchor>
    //      </ArrowLink>
    //    </StyledHeader.HeaderStartButtonAsk>
    //  ),
    //},
  ],
  navItems: [
    { children: '介  绍', href: '#intro' },
    { children: '奖  项', href: '#prize' },
    { children: '评  委', href: '#judges' },
    { children: '常见问题', href: '#faq' },
    { children: '合作伙伴', href: '#partner' },
  ],
};

export interface IThemeRace {
  color: string;
  name: string;
  body: string;
}
export const dataThemeRace: IThemeRace[] = [
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

export interface IWinnerTeamItem {
  pictureImage: StaticImageData;
  githubLink: string;
  playbackLink: string;
  rfcLink: string;
  name: React.ReactNode;
  description: React.ReactNode;
  prize: React.ReactNode;
  bonus: React.ReactNode;
}
export interface IWinnerTeamRace {
  name: string;
  color: string;
  items: IWinnerTeamItem[];
}
export const dataWinnerTeam: {
  application: IWinnerTeamRace;
  production: IWinnerTeamRace;
} = {
  application: {
    name: '应用组',
    color: '#F67200',
    items: [
      {
        pictureImage: productionGroup_0_Image,
        githubLink: 'https://github.com/Lloyd-Pottiger/DataDance',
        playbackLink: 'https://www.bilibili.com/video/BV1we411G75H/',
        rfcLink: 'https://gist.github.com/Lloyd-Pottiger/2f9bfabcfd0e86230251ebb54315cf3d',
        name: '图一乐',
        description: 'Data Dance，Try TiDB online~',
        prize: '一等奖 + 用户之选奖',
        bonus: '奖金 ¥50,000',
      },
      {
        pictureImage: productionGroup_1_Image,
        githubLink: 'https://github.com/VelocityLight/yunji',
        playbackLink: 'https://www.bilibili.com/video/BV1ZK411D7xG/',
        rfcLink: 'https://gist.github.com/VelocityLight/ccb4c50e569b1ee733f23a2bb97e8439',
        name: '不上班你养我啊',
        description: '云迹，解决企业在云上部署架构下统一成本分析、关键指标监控告警的问题',
        prize: '二等奖 + 最佳人气奖',
        bonus: '奖金 ¥50,000 + 奖金 ¥5,000',
      },
      {
        pictureImage: productionGroup_2_Image,
        githubLink: 'https://github.com/mirror-data/mirror',
        playbackLink: 'https://www.bilibili.com/video/BV1D14y157U4/',
        rfcLink: 'https://gist.github.com/wph95/bcb6f9fe3401a5978cedf3389afa7f75',
        name: '6c0c6375-462b-4320-9af2-03593d55b227',
        description: 'Mirror-魔镜，不用写复杂 SQL 就可以简单获得分析结果',
        prize: '二等奖 + 最佳创意奖',
        bonus: '奖金 ¥25,000 + 键鼠套装/人',
      },
      {
        pictureImage: productionGroup_3_Image,
        githubLink: 'https://github.com/Daemonxiao/n8n/tree/tidb/packages/nodes-base/nodes/TiDB',
        playbackLink: 'https://www.bilibili.com/video/BV1784y1B7oB/',
        rfcLink: 'https://gist.github.com/shiyuhang0/ae6d9deab4c8e1708b80bea1de9df279',
        name: 'cloud naive',
        description: 'My Life，记录我们的生活轨迹，存储到 TiDB 中，最终以各种方式展现',
        prize: '三等奖',
        bonus: '奖金 ¥25,000 + 奖金 ¥5,000',
      },
      {
        pictureImage: productionGroup_4_Image,
        githubLink: 'https://github.com/sydpz/pingcap_hackthon',
        playbackLink: 'https://www.bilibili.com/video/BV1Ue4y177vv/',
        rfcLink: 'https://gist.github.com/sydpz/2d5791eabb47058fdd377d4bdd4af775#file-md',
        name: '一天一个项目',
        description:
          'HTAP Charts，在 TiDB 层设计与实现 charts 组件， 用户可以基于配置和拖拽的方式生成自己的图表，然后在网站上获取相应图标的 iframe 代码，嵌入至自己的应用内即完成了图表的相关构建',
        prize: '三等奖',
        bonus: '奖金 ¥15,000',
      },
      {
        pictureImage: productionGroup_5_Image,
        githubLink: 'https://github.com/cutecutecat/TiKey',
        playbackLink: 'https://www.bilibili.com/video/BV1Q14y157qk/',
        rfcLink: 'https://gist.github.com/cutecutecat/17e12ec4d5f677ff74482468221e34f9',
        name: '敲代码不喊我是吧',
        description: 'TiCat，项目着眼于实现从 MySQL 迁移到 TiDB 的迁移校验工具',
        prize: '三等奖 + 最佳校园奖',
        bonus: '奖金 ¥15,000 + 奖金 ¥5,000',
      },
      {
        pictureImage: productionGroup_6_Image,
        githubLink: '#',
        playbackLink: 'https://www.bilibili.com/video/BV1WP4y1S7S8/',
        rfcLink: 'https://github.com/ChenlingLu/NFTips',
        name: '莫慌！有我！',
        description: 'NFTips，直接使用公链数据对 NFT 数字藏品的“一生”做可视化分析',
        prize: '区块链专项奖 + 技术趋势奖',
        bonus: '奖金 ¥10,000 + 奖金 ¥5,000',
      },
      {
        pictureImage: productionGroup_7_Image,
        githubLink: '#',
        playbackLink: 'https://www.bilibili.com/video/BV1Re4y1e7NW/',
        rfcLink: 'https://gist.github.com/shizn/9d95122027d06b319fd1a8f97a2754e8',
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
        pictureImage: applicationGroup_0_Image,
        githubLink: 'https://github.com/tangenta/tidb/tree/batch-point-get',
        playbackLink: '#',
        rfcLink: 'https://github.com/flowbehappy/double_my_tps',
        name: '摸鱼就是',
        description: 'Double My QPS，一键变强',
        prize: '一等奖',
        bonus: '奖金 ¥50,000',
      },
      {
        pictureImage: applicationGroup_1_Image,
        githubLink: 'https://github.com/zanmato1984/tidb/commit/33dc07bfc0c0bbce7ae1951bfa445374dcda15e9',
        playbackLink: '#',
        rfcLink: 'https://gist.github.com/zanmato1984/e9177d3f9b30023c16765d0161b4f43f',
        name: '我垫你们蹲',
        description: 'TiFlash Collocated Optimization，TiFlash 支持 Collocated Join',
        prize: '二等奖',
        bonus: '奖金 ¥25,000',
      },
      {
        pictureImage: applicationGroup_2_Image,
        githubLink: '#',
        playbackLink: '#',
        rfcLink: 'https://github.com/12Cat-TiDB/FRC#readme',
        name: '12只喵',
        description: 'MoreCat，让所有人都能通过 tiup 个人镜像向 TiDB 贡献组件，打造组件市场的雏形',
        prize: '二等奖',
        bonus: '奖金 ¥25,000',
      },
      {
        pictureImage: applicationGroup_3_Image,
        githubLink: '#',
        playbackLink: '#',
        rfcLink: 'Hackathon2022 - TiFancy RFC',
        name: 'TiFancy',
        description:
          'Fast at Scale，受 OSSInsight.io 启发，加强 TiDB HTAP 中对于 AP 请求的 Serving 能力，通过补全 AP 的 Serving 能力，让类似 OSSInsight 这类的 DaaS 应用直接受益，为用户从海量数据中获取实时精准的业务洞察',
        prize: '三等奖',
        bonus: '奖金 ¥15,000',
      },
      {
        pictureImage: applicationGroup_4_Image,
        githubLink: '#',
        playbackLink: '#',
        rfcLink: 'Optimizer trace RFC',
        name: '彦青说得队',
        description: 'Optimizer trace，对 TiDB 优化器决策过程进行可视化展示',
        prize: '三等奖 + 用户之选奖',
        bonus: '奖金 ¥15,000 + 奖金 ¥5,000',
      },
      {
        pictureImage: applicationGroup_5_Image,
        githubLink: '#',
        playbackLink: '#',
        rfcLink: 'https://github.com/Sibyl-TiDB/FRC/blob/main/README.md',
        name: '鸡你太美',
        description: '"Sibyl is an Easier-to-use SQL Diagnostics tool for TiDB.',
        prize: '三等奖',
        bonus: '奖金 ¥15,000',
      },
      {
        pictureImage: applicationGroup_6_Image,
        githubLink: '#',
        playbackLink: '#',
        rfcLink: 'https://gist.github.com/OneSizeFitsQuorum/da4b1e12b9f216fd3b42e88c57fd9e55',
        name: '热点清零',
        description:
          'Fearless Write Hotspot，本项目将采用 bottom-up 的设计思路，从更好地利用 CPU、磁盘等资源的角度出发，考虑如何自底向上解决 TiKV 的写热点问题。',
        prize: '最佳校园奖',
        bonus: '奖金 ¥5,000',
      },
      {
        pictureImage: applicationGroup_7_Image,
        githubLink: '#',
        playbackLink: '#',
        rfcLink: 'https://gist.github.com/mikechengwei/d206ebf2f66c013a5ddf7740301dbba4',
        name: '黑马警长',
        description:
          '迁移一条龙，用心连接导出导入。租户的隔离需求有的是强需求有的是弱需求，有的租户暂时只需要逻辑隔离，有的一开始就需要强隔离，有的会随着业务场景的转变由弱转强，会产生迁移的需求。',
        prize: '最佳人气奖',
        bonus: '键鼠套装/人',
      },
    ],
  },
};

export interface IFinalistTeamItem {
  teamName: string;
  projectName: string;
  score: string;
  rank: number;
  playbackUrl: string;
  rfcUrl: string;
  githubUrl: string;
  introduction: React.ReactNode;
}
export interface IFinalistGroupItem {
  name: string;
  color: string;
  items: IFinalistTeamItem[];
}
export const dataFinalist: IFinalistGroupItem[] = [
  {
    name: '应用组',
    color: '#F67200',
    items: [
      {
        teamName: '图一乐',
        projectName: 'Data Dance',
        score: '88.94',
        rank: 1,
        githubUrl: 'https://github.com/Lloyd-Pottiger/DataDance',
        playbackUrl: 'https://www.bilibili.com/video/BV1we411G75H/',
        rfcUrl: 'https://gist.github.com/Lloyd-Pottiger/2f9bfabcfd0e86230251ebb54315cf3d',
        introduction: (
          <>
            <p>Try TiDB online~</p>
          </>
        ),
      },
      {
        teamName: '不上班你养我啊',
        projectName: '云迹',
        score: '86.54',
        rank: 2,
        githubUrl: 'https://github.com/VelocityLight/yunji',
        playbackUrl: '该团队答辩视频不对外',
        rfcUrl: 'https://gist.github.com/VelocityLight/ccb4c50e569b1ee733f23a2bb97e8439',
        introduction: (
          <>
            <p>云技术技术浪潮下，企业一方面享受弹性带来的甜头，一方面苦恼于云上资源成本的管理。</p>
            <p>
              忘记关闭资源、程序泄漏资源、费用瞬时暴增这些问题让企业人员都头痛不已。亚马逊将勤俭节约（Frugality）作为领导力准则之一，可见成本对于一家企业的重要意义，对于创业公司更是如此。成本优化不是一个公司的任务，每个云上开发人员都需要具备的
              sence，极致优化才能诞生伟大的软件。
            </p>
            <p>
              本项目终极目的是解决企业在云上部署架构下统一成本分析、关键指标监控告警的问题。因考虑到数据量巨大，统计分析实时查询、告警要求多，我们采用
              HTAP 数据库的 TiDB 作为存储和计算引擎，发挥 TiDB 在应用场景下的价值。
            </p>
            <p>期待可以通过云迹，节约你的金钱亿点点！</p>
          </>
        ),
      },
      {
        teamName: '6c0c6375-462b-4320-9af2-03593d55b227',
        projectName: 'Mirror-魔镜',
        score: '84.08',
        rank: 3,
        githubUrl: 'https://github.com/mirror-data/mirror',
        playbackUrl: 'https://www.bilibili.com/video/BV1D14y157U4/',
        rfcUrl: 'https://gist.github.com/wph95/bcb6f9fe3401a5978cedf3389afa7f75',
        introduction: (
          <>
            <p>墨镜，不用写复杂 SQL 就可以简单获得分析结果。</p>
            <p>队名启发：魔镜魔镜告诉我，谁是世界上润的最快的分布式数据库。</p>
            <p>首先魔镜会自动读取 TIDB Cloud，获取数据库的各个元信息。</p>
            <p>接着通过深度学习将用户输入的自然语言转换成 SQL。</p>
            <p>最后将结果通过 GPT3 生成简要。</p>
          </>
        ),
      },
      {
        teamName: 'cloud naive',
        projectName: 'My Life',
        score: '83.23',
        rank: 4,
        githubUrl: 'https://github.com/Daemonxiao/n8n/tree/tidb/packages/nodes-base/nodes/TiDB',
        playbackUrl: 'https://www.bilibili.com/video/BV1784y1B7oB/',
        rfcUrl: 'https://gist.github.com/shiyuhang0/ae6d9deab4c8e1708b80bea1de9df279',
        introduction: 'My Life 是我们想法的一个 example，他能记录我们的生活轨迹，存储到 TiDB 中，最终以各种方式展现。',
      },
      {
        teamName: '一天一个项目',
        projectName: 'HTAP Charts',
        score: '82.88',
        rank: 5,
        githubUrl: 'https://github.com/sydpz/pingcap_hackthon',
        playbackUrl: 'https://www.bilibili.com/video/BV1Ue4y177vv/',
        rfcUrl: 'https://gist.github.com/sydpz/2d5791eabb47058fdd377d4bdd4af775#file-md',
        introduction:
          '在TiDB 层设计与实现 charts 组件， 用户可以基于配置和拖拽的方式生成自己的图表，然后在网站上获取相应图标的 iframe 代码，嵌入至自己的应用内即完成了图表的相关构建',
      },
      {
        teamName: '敲代码不喊我是吧',
        projectName: 'TiCat',
        score: '82.54',
        rank: 6,
        githubUrl: 'https://github.com/cutecutecat/TiKey',
        playbackUrl: 'https://www.bilibili.com/video/BV1Q14y157qk/',
        rfcUrl: 'https://gist.github.com/cutecutecat/17e12ec4d5f677ff74482468221e34f9',
        introduction:
          '项目着眼于实现从MySQL迁移到 TiDB 的迁移校验工具。利用SQL词法解析器和预定义规则，设计一个具有良好拓展性的自动化检查器，可以检查SQL语句是否符合 TiDB 的要求，能够进行自动迁移，并对于不合要求之处给出建议和相关链接。',
      },
      {
        teamName: 'Ti 流批',
        projectName: 'Ti 流批',
        score: '81.66',
        rank: 7,
        githubUrl: 'https://github.com/TiStore/TiLiupi',
        playbackUrl: 'https://www.bilibili.com/video/BV1Se41137ke',
        rfcUrl: 'https://gist.github.com/AndreMouche/bc9cf1c4a02ca19af27a79dfd728a88b',
        introduction: '基于 TiDB + Flink Table Store 实现流批一体存储系统，以实现降本增效',
      },
      {
        teamName: '开心就好',
        projectName: 'cool',
        score: '81.63',
        rank: 8,
        githubUrl: 'https://github.com/yuliang119110/cool',
        playbackUrl: 'https://www.bilibili.com/video/BV1dG4y187mL/',
        rfcUrl: 'https://gist.github.com/yuliang119110/eb0d454a0090ee6cf5c649aaabdf5078',
        introduction: '实时处理和并且分析区块链TB级的数据，上亿规模的交易数据',
      },
      {
        teamName: '自己写 自己查 自己网站上挂',
        projectName: 'OSSInsight Marketplace',
        score: '81.61',
        rank: 9,
        githubUrl: '',
        playbackUrl: 'https://www.bilibili.com/video/BV1D8411e7ks/',
        rfcUrl: 'https://gist.github.com/Icemap/9dd1e38abea4e771f3581f3c672c196d',
        introduction:
          '本小队计划在 Hackathon 2022 中完成 OSSInsight 的 Marketplace 模块。用户可自由上传自己编写的组件，通过审核后，其他用户可使用此组件，并可将组件嵌入到任意页面中（iframe 方式）。',
      },
      {
        teamName: "1' or '1' = '1",
        projectName: 'TiSQLi',
        score: '81.44',
        rank: 10,
        githubUrl: '',
        playbackUrl: '上传视频，后续再更新',
        rfcUrl: 'https://gist.github.com/flily/c1009c65e08eaed28e9f39f1d371cea7',
        introduction: 'SQL-injection detection method with TiDB SQL parser',
      },
      {
        teamName: '莫慌！有我！',
        projectName: 'NFTips',
        score: '81.41',
        rank: 11,
        githubUrl: 'https://github.com/ChenlingLu/NFTips',
        playbackUrl: 'https://www.bilibili.com/video/BV1WP4y1S7S8/',
        rfcUrl: 'https://github.com/ChenlingLu/NFTips',
        introduction:
          '直接使用公链数据对 NFT 数字藏品的“一生”做可视化分析，帮助买家发现藏品潜力，判断投资风险；可能也能对卖家发布数字藏品（定价、预估成交价、判断转手次数等方面）提供洞察。',
      },
      {
        teamName: 'Ti可立刻',
        projectName: 'Ti-Click++',
        score: '81.32',
        rank: 12,
        githubUrl: '',
        playbackUrl: 'https://www.bilibili.com/video/BV1St4y1u7Su',
        rfcUrl: 'https://github.com/ti-click/pingcap-hackathon-2022',
        introduction:
          '为了让用户可以更快速的尝试TiDB和TiDB Cloud，无需用户进行本地的部署和环境调试，尝试为用户提供在线IDE环境以及Sample App',
      },
      {
        teamName: 'Second State',
        projectName: 'A serverless ETL runtime for the TiDB Cloud',
        score: '79.75',
        rank: 13,
        githubUrl: '',
        playbackUrl: 'https://www.bilibili.com/video/BV1Be4y177WK/',
        rfcUrl: 'https://gist.github.com/juntao/785f9505eed335431d774f6c801a9f1f',
        introduction:
          "We propose to create a cloud-native ETL application framework based on the WasmEdge WebAssembly runtime for developers to filter, map, and transform data going into TiDB cloud databases. Developers will be able to create secure, lightweight, fast and cross-platform ETL functions that are located close to or even embedded in TiDB Cloud's infrastructure. The ETL functions can be deployed as serverless functions and receive data from a variety of sources including event queues, webhook callbacks and data streaming pipelines. The outcomes are written into user configured TiDB tables for later analysis.",
      },
      {
        teamName: '三人行',
        projectName: 'Python Playground',
        score: '79.27',
        rank: 14,
        githubUrl: '',
        playbackUrl: 'https://www.bilibili.com/video/BV1384y1B7rj/',
        rfcUrl: 'https://gist.github.com/zhangyangyu/7929a2293c4d1f25b225e93cb3129209',
        introduction:
          'Go 语言的 Go Playground 是一个非常好的简易 Go 语言代码片段学习、分享工具，使用者可以用它来学习、验证语言、库的基本能力，同时也可以通过链接分享给他人，在 stackoverflow 上进行提问、回答时，也倾向于通过它来分享代码。但 Python 语言官方却没有一个如此的工具，Python Playground 希望基于 WSAM 和 TiDB Cloud 来实现此功能。',
      },
      {
        teamName: '贵司贵组',
        projectName: 'TiDB Cloud VS Code extension',
        score: '78.78',
        rank: 15,
        githubUrl: 'https://github.com/shizn/vscode-tidb-cloud',
        playbackUrl: 'https://www.bilibili.com/video/BV1Re4y1e7NW/',
        rfcUrl: 'https://gist.github.com/shizn/9d95122027d06b319fd1a8f97a2754e8',
        introduction: '用VS Code直接管理TiDB Cloud cluster, 赋能开发者进行一站式数据处理和应用开发。',
      },
      {
        teamName: '三恒诸浪',
        projectName: 'SSO 实现 TiDB 登录权限校验',
        score: '78.61',
        rank: 16,
        githubUrl: '',
        playbackUrl: 'https://www.bilibili.com/video/BV1SG4y187CA/',
        rfcUrl: 'https://gist.github.com/Sindweller/59bb18dc9140b3a3c51c9e73def197d6',
        introduction:
          '本项目将致力于使用 SSO作为TiDB的登录认证方式，使得用户可以避免使用直接的数据库用户名密码连接TiDB，增强安全性与权限控制。',
      },
      {
        teamName: 'Cloooudy',
        projectName: 'ETiCD',
        score: '78.31',
        rank: 17,
        githubUrl: '',
        playbackUrl: 'https://www.bilibili.com/video/BV1nP4y1S7Z3',
        rfcUrl: 'https://gist.github.com/fgksgf/2cbf26f6c1ddda74c691cb69d0a00b25',
        introduction: 'Etcd as a Service, powered by TiDB.',
      },
      {
        teamName: 'KubeBrain',
        projectName: 'KubeBrain',
        score: '77.91',
        rank: 18,
        githubUrl: '',
        playbackUrl: 'https://www.bilibili.com/video/BV1Qe4y177fG/',
        rfcUrl: 'https://gist.github.com/divanodestiny/fd4f957cdc3a099414e7a93459168958',
        introduction: '基于 TiDB 实现 kubernetes 元信息存储系统',
      },
      {
        teamName: '42',
        projectName: 'ETCD with TiDB ',
        score: '77.35',
        rank: 19,
        githubUrl: '',
        playbackUrl: 'https://www.bilibili.com/video/BV1ZG411L7KN/',
        rfcUrl: 'https://gist.github.com/NageNalock/e47fde8dfff1000d66bbe11e2b0f6527',
        introduction: 'Ectd 的容量有限制，可以做一个中间件实现 etcd 的接口，背后是 tidb',
      },
      {
        teamName: 'HOTPOOR',
        projectName: 'FindMaster',
        score: '77.21',
        rank: 20,
        githubUrl: '',
        playbackUrl: 'https://www.bilibili.com/video/BV1JW4y1E7sR/',
        rfcUrl: 'https://gist.github.com/hotpoor/e34569767c75cec0b5f7a21f6bd5aaa6',
        introduction: '像做ppt一样做网站',
      },
      {
        teamName: 'MindBase',
        projectName: 'MindBase',
        score: '76.43',
        rank: 21,
        githubUrl: '',
        playbackUrl: 'https://www.bilibili.com/video/BV1EK411U7QZ/',
        rfcUrl: 'https://gist.github.com/Hu-Wentao/3f259f05d5e4e34637619a17559325ee',
        introduction: 'MindBase - 以Flutter与TiCloud为基础，打造一个DBaaS服务和内容管理系统（CMS）。',
      },
      {
        teamName: 'Give Me Five',
        projectName: 'Public Data Market Service',
        score: '75.75',
        rank: 22,
        githubUrl: '',
        playbackUrl: 'https://www.bilibili.com/video/BV1wD4y1b78S/',
        rfcUrl: 'https://gist.github.com/zhangjinpeng1987/a5a491687cf0cf29f266981e818219fd',
        introduction:
          'Store public data like (public block-chain data, public stock market data, public news) in TiDB Cloud, and leverage the HTAP ability of TiDB Cloud to provide public data retrieving/analysis service.',
      },
      {
        teamName: '发际线保护协会',
        projectName: '基于kine加入适配层后端使用tidb扩展etcd',
        score: '74.97',
        rank: 23,
        githubUrl: '',
        playbackUrl: 'https://www.bilibili.com/video/BV1RD4y1t7Dq/',
        rfcUrl: 'https://gist.github.com/kksh3ll/ccc7c3ccb247b88cad34752e7b6527fe',
        introduction: (
          <>
            <p>etcd 基于 BoltDB，容量具有上限，这些自身的架构问题，导致etcd在数据存储方面有缺陷。</p>
            <p>
              作为适配中间层，kine项目完整地实现了 etcd 需要支持的 watch 功能，且模拟了 etcd 的 MVCC 特性，支持
              Compact。
            </p>
          </>
        ),
      },
      {
        teamName: '中杯 大杯 超大杯',
        projectName: 'TiTicket',
        score: '74.56',
        rank: 24,
        githubUrl: '',
        playbackUrl: 'https://www.bilibili.com/video/BV1L14y157jZ/',
        rfcUrl: 'https://gist.github.com/HikawaRin/7dcd7cf58de6ddd08a24290539580679',
        introduction: (
          <>
            <p>TiDB售票处，基于SSO进行用户认证，实现在TiDB上的自助注册及权限申请</p>
          </>
        ),
      },
      {
        teamName: 'TINOCO',
        projectName: 'TiNocoDB',
        score: '73.84',
        rank: 25,
        githubUrl: '',
        playbackUrl: 'https://www.bilibili.com/video/BV1AP4y1S7Tj/',
        rfcUrl: 'https://gist.github.com/meathill/32ca25112194965724913b34de76dafd',
        introduction: (
          <>
            <p>
              AirTable 是很棒的低代码管理工具，可惜他们用收费墙限制免费用户使用 row-based 权限管理。NocoDB
              是其开源替代品，可惜 MySQL 后端会在不远的未来成为枷锁。我们相信 TiDB 强大的 scalable
              特性会彻底释放智能表格的潜力，让用户从弱到强后顾无忧。所以我们希望将 NocoDB 嫁接到 TiDB。
            </p>
          </>
        ),
      },
      {
        teamName: '五湖四海',
        projectName: 'SSO 实现 TiDB 登录权限校验',
        score: '71.56',
        rank: 26,
        githubUrl: '',
        playbackUrl: 'https://www.bilibili.com/video/BV1WV4y1G7s7/',
        rfcUrl: 'https://github.com/qiao511869361/tidb_hackathon_2022/blob/main/hackathon_2022_五湖四海_RFC.md',
        introduction: (
          <>
            <p>SSO 实现 TiDB 登录权限校验</p>
          </>
        ),
      },
      {
        teamName: '大明湖畔的小天台',
        projectName: 'MIXED HTAP ON K8S',
        score: '69.49',
        rank: 27,
        githubUrl: '',
        playbackUrl: 'https://www.bilibili.com/video/BV1584y1B7Wr/',
        rfcUrl: 'https://github.com/WholeWorld-Timothy/OneEntrance/blob/main/README.md',
        introduction: (
          <>
            <p>
              现在TiFlash还没有实现高吞吐的直接写入，对于离线计算不是很友好，尝试组合几个开源产品，实现基于TiDB的高吞吐AP侧实现
            </p>
          </>
        ),
      },
    ],
  },
  {
    name: 'TiDB 产品组',
    color: '#00CF71',
    items: [
      {
        teamName: '摸鱼就是',
        projectName: 'Double My QPS',
        score: '83.49',
        rank: 1,
        playbackUrl: 'https://www.bilibili.com/video/BV1YK411D7ek/',
        rfcUrl: 'https://github.com/flowbehappy/double_my_tps',
        githubUrl: 'https://github.com/tangenta/tidb/tree/batch-point-get',
        introduction: (
          <>
            <p>一键变强</p>
          </>
        ),
      },
      {
        teamName: '我垫你们蹲',
        projectName: 'TiFlash Collocated Optimization',
        score: '82.20',
        rank: 2,
        playbackUrl: 'https://www.bilibili.com/video/BV1uD4y1k7WD/',
        rfcUrl: 'https://gist.github.com/zanmato1984/e9177d3f9b30023c16765d0161b4f43f',
        githubUrl: 'https://github.com/zanmato1984/tidb/commit/33dc07bfc0c0bbce7ae1951bfa445374dcda15e9',
        introduction: (
          <>
            <p>TiFlash 支持 Collocated Join</p>
          </>
        ),
      },
      {
        teamName: '12只喵',
        projectName: 'MoreCat',
        score: '81.59',
        rank: 3,
        playbackUrl: 'https://www.bilibili.com/video/BV1ed4y1y7AU/',
        rfcUrl: 'https://github.com/12Cat-TiDB/FRC#readme',
        githubUrl: 'https://github.com/12Cat-TiDB',
        introduction: <>让所有人都能通过 tiup 个人镜像向 tidb 贡献组件，打造组件市场的雏形</>,
      },
      {
        teamName: 'TiFancy',
        projectName: 'TiFancy',
        score: '79.65',
        rank: 4,
        playbackUrl: '等待视频内容',
        rfcUrl: 'Hackathon2022 - TiFancy RFC ',
        githubUrl: 'https://github.com/tifancy2022/tidb',
        introduction: (
          <>
            <p>
              Fast at Scale。本项目受 OSSInsight.io 启发，旨在加强 TiDB 的 HTAP 中对于 AP 请求的 Serving 能力，通过补全
              AP 的 Serving 能力，让类似 OSSInsight 这类的 DaaS (Data as a Service)
              应用直接受益，为用户从海量数据中获取实时精准的业务洞察。
            </p>
          </>
        ),
      },
      {
        teamName: '彦青说得队',
        projectName: 'Optimizer trace',
        score: '79.25',
        rank: 5,
        playbackUrl: 'https://www.bilibili.com/video/BV1oe4y117vc/',
        rfcUrl: 'Optimizer trace RFC',
        githubUrl: 'https://github.com/yisaer/tidb/tree/2022_hackathon',
        introduction: (
          <>
            <p>对 tidb 优化器决策过程进行可视化展示</p>
          </>
        ),
      },
      {
        teamName: '鸡你太美',
        projectName: 'Sibyl',
        score: '79.12',
        rank: 6,
        playbackUrl: 'https://www.bilibili.com/video/BV1sV4y1G7zS/',
        rfcUrl: 'https://github.com/Sibyl-TiDB/FRC/blob/main/README.md',
        githubUrl: 'https://github.com/Sibyl-TiDB',
        introduction: (
          <>
            <p>Sibyl is an Easier-to-use SQL Diagnostics tool for TiDB.</p>
            <p>小白也能用的 SQL 优化工具。</p>
          </>
        ),
      },
      {
        teamName: 'The Powerful Elephants',
        projectName: 'make table cache a little better',
        score: '77.09',
        rank: 7,
        playbackUrl: 'https://www.bilibili.com/video/BV1u84y1B7VB/',
        rfcUrl: 'https://github.com/dbsid/Better-Table-Cache-RFC',
        githubUrl: '',
        introduction: (
          <>
            <p>table cache 改良计划</p>
          </>
        ),
      },
      {
        teamName: 'Canopus',
        projectName: 'TiDB 计算微服务',
        score: '76.55',
        rank: 8,
        playbackUrl: 'https://www.bilibili.com/video/BV1ie4y1U7tQ/',
        rfcUrl: 'https://gist.github.com/Benjamin2037/adde8cde57c1b820c5fe4a4e3b6a2983',
        githubUrl: '',
        introduction: (
          <>
            <p>
              作为数据库核心模块的计算层，在数据库实现上云之后，是否能够也能够将其中的计算进行微服务化改造呢？我们这个项目将会对于这部分功能做一个非常有意思的尝试。
            </p>
          </>
        ),
      },
      {
        teamName: 'go.unwrap()',
        projectName: 'ticli-rs',
        score: '76.05',
        rank: 9,
        playbackUrl: 'https://www.bilibili.com/video/BV1bP4y1S737/',
        rfcUrl: 'https://github.com/hackathon-2022-ticli/rfc',
        githubUrl: '',
        introduction: (
          <>
            <p>tcli in rust!</p>
          </>
        ),
      },
      {
        teamName: 'BLEACH',
        projectName: 'BLEACH',
        score: '75.95',
        rank: 10,
        playbackUrl: 'https://www.bilibili.com/video/BV1rP411A7mf/',
        rfcUrl: 'https://gist.github.com/winoros/035369300804a7804dfb62599f94f8a5',
        githubUrl: '',
        introduction: (
          <>
            <p>为 TiDB 提供一个基于学习和规则的 SQL 文本改写前端</p>
          </>
        ),
      },
      {
        teamName: '热点清零',
        projectName: 'Fearless Write Hotspot',
        score: '75.59',
        rank: 11,
        playbackUrl: 'https://www.bilibili.com/video/BV1cP4y1S7Xo/',
        rfcUrl: 'https://gist.github.com/OneSizeFitsQuorum/da4b1e12b9f216fd3b42e88c57fd9e55',
        githubUrl: 'https://github.com/orgs/FWH-TiKV/repositories',
        introduction: (
          <>
            <p>
              本项目将采用 bottom-up 的设计思路，从更好地利用 CPU、磁盘等资源的角度出发，考虑如何自底向上解决 TiKV
              的写热点问题。
            </p>
          </>
        ),
      },
      {
        teamName: 'Leonardo',
        projectName: 'WAY@TiDB GIS support',
        score: '74.42',
        rank: 12,
        playbackUrl: 'https://www.bilibili.com/video/BV16e41137Vf/',
        rfcUrl: 'https://github.com/yiwen92/Hackathon2022_GIS/blob/main/README.md',
        githubUrl: '',
        introduction: (
          <>
            <p>
              Leonardo da Vinci is a versatile talent in history, in this WAY program, we would like to support spatial
              data in TiDB, make TiDB to support multi-model and become uniform data platform in future.
            </p>
            <p>
              历史上的莱昂纳多.达芬奇是一个全面发展的天才，在 WAY 这个项目里，我们希望开发 TiDB
              使其支持空间信息数据，扩展 TiDB 在多模数据库上的能力和应用场景，期待未来 TiDB
              成为一个更加通用、完整且统一的大数据平台。
            </p>
          </>
        ),
      },
      {
        teamName: '你说都对',
        projectName: '配置兼容性看护',
        score: '74.15',
        rank: 13,
        playbackUrl: 'https://www.bilibili.com/video/BV1Ue4y1e7jH/',
        rfcUrl: 'https://gist.github.com/seiya-annie/95272e315b8ecab27731c579f4d6c2f6',
        githubUrl: '',
        introduction: (
          <>
            <p>
              配置兼容性看护工具可以对配置变更项进行溯源找到引入变更的
              PR；也可以对版本间的配置兼容性进行测试发现兼容性问题。保障版本间的配置变更不会引起兼容性问题。
            </p>
          </>
        ),
      },
      {
        teamName: '龙哥说的都',
        projectName: 'Placement Rules 可视化配置',
        score: '74.06',
        rank: 14,
        playbackUrl: 'https://www.bilibili.com/video/BV1JP4y1S7AY/',
        rfcUrl: 'https://gist.github.com/disksing/d9c2b2360e4aaafb260664e450855bfd',
        githubUrl: '',
        introduction: (
          <>
            <p>Placement Rules 可视化配置</p>
          </>
        ),
      },
      {
        teamName: '更实用，更易用',
        projectName: 'Tidb holding hands with S3',
        score: '73.27',
        rank: 15,
        playbackUrl: 'https://www.bilibili.com/video/BV1ZK411D7Ee/',
        rfcUrl: 'https://gist.github.com/elsa0520/eea6b02bae43df83bf3f33e3e97b40b9',
        githubUrl: '',
        introduction: (
          <>
            <p>支持将查询的结果集直接导出到指定的s3文件中</p>
          </>
        ),
      },
      {
        teamName: 'P2T',
        projectName: 'Postegre sql to TiDB',
        score: '72.55',
        rank: 16,
        playbackUrl: 'https://www.bilibili.com/video/BV1Cm4y1w7Ef/',
        rfcUrl: 'https://gist.github.com/lichunzhu/8fb7345e29dd2e5ec29fb28043f2b4cf',
        githubUrl: '',
        introduction: (
          <>
            <p>支持迁移 postegre sql 数据库至 TiDB</p>
          </>
        ),
      },
      {
        teamName: '你说了算',
        projectName: 'AutoIndex',
        score: '72.50',
        rank: 17,
        playbackUrl: 'https://www.bilibili.com/video/BV12G411L7vh/',
        rfcUrl: 'https://gist.github.com/LittleFall/7f0ddfb2dd6d029e06d22760f6eb1de1',
        githubUrl: '',
        introduction: (
          <>
            <p>为云上 TiDB 集群给出自动添加索引和 TiFlash 副本的建议，以高效优化用户查询。</p>
          </>
        ),
      },
      {
        teamName: 'Jiekun',
        projectName: 'FSDS',
        score: '72.43',
        rank: 18,
        playbackUrl: 'https://www.bilibili.com/video/BV1JP4y1S7Nh/',
        rfcUrl: 'https://gist.github.com/jiekun/ac4387b613e91c2d4142df35614cab34',
        githubUrl: '',
        introduction: (
          <>
            <p>对外展示：为 TiDB 提供全量数据导出的支持，方便构建异构存储/次级存储。</p>
            <p>
              SDS (Full State Data Synchronization)It's very common to use a heterogeneous storage. One important
              procedure is to replicate full data + change data from TiDB to other storage. With current toolset we need
              to do this by different setup. TiSync provide low latency, lock-free, 0 write I/O and 0 extra space way to
              achieve this goal.
            </p>
            <p>
              异构数据在日常开发中非常常见，其中一个重要步骤是配置全量+增量数据同步到其他存储。以现有的工具集我们需要分两步来完成。TiSync
              提供低延迟、无锁、无额外写 I/O 和无额外磁盘空间的全量+增量同步实现。
            </p>
          </>
        ),
      },
      {
        teamName: 'cdc-plg',
        projectName: 'cdc sink plugin',
        score: '71.25',
        rank: 19,
        playbackUrl: 'https://www.bilibili.com/video/BV1se4y1e7bv/',
        rfcUrl: 'https://github.com/mischaZhang/cdc-plg/blob/main/README.md',
        githubUrl: '',
        introduction: (
          <>
            <p>
              我们要把cdc的sink以plugin的形式交付用户，让用户不需要重新编译Tiflow项目打包TiCDC就可以直接自定义逻辑！让用户可以把TiKV的数据从TiCDC发去全世界任何存储上！
            </p>
          </>
        ),
      },
      {
        teamName: '爱吃苦瓜和大米',
        projectName: 'TiPipeline',
        score: '71.05',
        rank: 20,
        playbackUrl: 'https://www.bilibili.com/video/BV1GG4y1h7Sb/',
        rfcUrl: 'https://github.com/TiPipeline/rfc',
        githubUrl: '',
        introduction: (
          <>
            <p>Better TiFlash execution model！</p>
            <p>
              基于 Hyper morsel driven 的设计，实现 thread per core 的线程模型，让 TiFlash
              在高并发场景下有很好的执行效率和 query 公平调度。
            </p>
          </>
        ),
      },
      {
        teamName: 'TiDB, YES！',
        projectName: 'fiberpunk',
        score: '70.85',
        rank: 21,
        playbackUrl: 'https://www.bilibili.com/video/BV1xe4y127er/',
        rfcUrl: 'https://gist.github.com/ywqzzy/b525765462eae7d90a7e41831a6632b3',
        githubUrl: '',
        introduction: (
          <>
            <p>将一部分线程池替换为协程，从而控制tiflash线程数量并得到一定的性能提升</p>
          </>
        ),
      },
      {
        teamName: '周边真好看',
        projectName: '周边真好看',
        score: '68.80',
        rank: 22,
        playbackUrl: 'https://www.bilibili.com/video/BV1814y157sS/',
        rfcUrl: 'https://gist.github.com/waynexia/258ee46f1b88113c383caf1f69ad1ae2',
        githubUrl: '',
        introduction: (
          <>
            <p>基于 eBPF 进行性能优化</p>
          </>
        ),
      },
      {
        teamName: '小灰灰yyds',
        projectName: 'TiDB Unified Execution Engine',
        score: '67.40',
        rank: 23,
        playbackUrl: 'https://www.bilibili.com/video/BV1wG4y1h7sQ/',
        rfcUrl: 'https://gist.github.com/guo-shaoge/e384ea0e06a6508b241dae8877996a6f',
        githubUrl: '',
        introduction: (
          <>
            <p>借助 Velox，为 TiDB 各组件实现统一的执行引擎</p>
          </>
        ),
      },
      {
        teamName: '黑马警长',
        projectName: '迁移一条龙',
        score: '66.85',
        rank: 24,
        playbackUrl: 'https://www.bilibili.com/video/BV1yd4y1y78M/',
        rfcUrl:
          'https://github.com/mikechengwei/Hackathon-2022/blob/main/Hackathon%202022%20-%20%E9%BB%91%E9%A9%AC%E8%AD%A6%E9%95%BF%20team%E2%80%98s%20RFC.md',
        githubUrl: 'https://github.com/mikechengwei/Hack-2022',
        introduction: (
          <>
            <p>
              用心连接导出导入。租户的隔离需求有的是强需求有的是弱需求，有的租户暂时只需要逻辑隔离，有的一开始就需要强隔离，有的会随着业务场景的转变由弱转强，会产生迁移的需求。
            </p>
          </>
        ),
      },
      {
        teamName: '队长负责带饭',
        projectName: 'TiBee',
        score: '66.80',
        rank: 25,
        playbackUrl: 'https://www.bilibili.com/video/BV1gD4y1k78a/',
        rfcUrl: 'https://gist.github.com/devillove084/f16402cfb982f43fa11560471246cc7f',
        githubUrl: '',
        introduction: (
          <>
            <p>
              2003 年，在 SQL 的标准中增加了一个名为“ SQL / MED ”，翻译过来是外部数据的 SQL 管理，是 SQL
              为了管理外部数据，但是可以使用标准 SQL 查询的补充协议。其另外一个名字 Foreign data wrapper(FDW )
              可能更耳熟一些。而本次项目就为了尝试解决 TiDB 缺失的 FDW 机制提出的新设计。
            </p>
          </>
        ),
      },
      {
        teamName: 'Sightseeing',
        projectName: '基于eBPF的TiDB数据流监控工具',
        score: '66.60',
        rank: 26,
        playbackUrl: 'https://www.bilibili.com/video/BV1me4y177ow/?',
        rfcUrl: 'https://gist.github.com/ri-char/9fdf7d070bedb3c934b15757c6f9e35c',
        githubUrl: '',
        introduction: (
          <>
            <p>
              该项目通过eBPF以及TiDB、TiKV的插件系统，实现对数据流的统计监控，绘制出实时的数据流图，弥补DashBoard关于该方面的不足。
            </p>
          </>
        ),
      },
      {
        teamName: 'BetterTP',
        projectName: 'BetterTP',
        score: '65.45',
        rank: 27,
        playbackUrl: 'https://www.bilibili.com/video/BV14g411z7LA/',
        rfcUrl: 'https://github.com/TiDBHackers/rfc/blob/master/text/why_and_how_does_round_trip_matters.md',
        githubUrl: '',
        introduction: (
          <>
            <p>尝试寻找 TiDB OLTP 性能优化方向</p>
          </>
        ),
      },
      {
        teamName: 'ng-raft-engine',
        projectName: 'ng-raft-engine',
        score: '64.12',
        rank: 28,
        playbackUrl: 'https://www.bilibili.com/video/BV1gG411j7en/',
        rfcUrl: 'https://gist.github.com/JaySon-Huang/e5910520ea377c65d1a68da013874530',
        githubUrl: '',
        introduction: (
          <>
            <p>Next generation raft engine</p>
          </>
        ),
      },
      {
        teamName: '煮酒论英雄',
        projectName: 'TiInverted',
        score: '63.47',
        rank: 29,
        playbackUrl: 'https://www.bilibili.com/video/BV1LV4y1G7fC/',
        rfcUrl: 'https://gist.github.com/Dousir9/3600403b85739a8653906e89fa6371bd',
        githubUrl: '',
        introduction: (
          <>
            <p>
              TiInverted 主要解决 TiDB 目前缺少对全文搜索(Full-Text
              Search)的支持问题，解决用户在检索文本时遇到的痛点。TiInverted 为 TiDB
              新增一个功能，使得用户可以在基于文本的列(CHAR、VARCHAR、TEXT
              等)上建立倒排索引，并适配MySQL的全文搜索功能的语法，从而实现在这一列上更高效、更复杂数据检索，此外还可以结合NLP的技术，允许用户设定模式，以在检索时获取相关性更高的搜索结果，实现数据库智能化（AI4DB）的宏观目标。
            </p>
          </>
        ),
      },
      {
        teamName: '苍蝇腿也是肉',
        projectName: '优化器支持 INDEX SKIP SCAN',
        score: '61.10',
        rank: 30,
        playbackUrl: 'https://www.bilibili.com/video/BV1HP4y1S7Xh/',
        rfcUrl: 'https://gist.github.com/maguoshun/3d72c5610fb979f20f9a9ee563529de9',
        githubUrl: '',
        introduction: (
          <>
            <p>
              给 TiDB 优化器支持 index skip scan，并复用 index skip scan 的能力，实现 group by 和 distinct 的 loose
              index scan
            </p>
          </>
        ),
      },
      {
        teamName: '小蝌蚪找妈妈',
        projectName: 'TiQ',
        score: '60.20',
        rank: 31,
        playbackUrl: 'https://www.bilibili.com/video/BV1iG411L7AV/',
        rfcUrl: 'https://gist.github.com/hunknownz/287910f1d661d35952f4c2bc758d7eaa',
        githubUrl: '',
        introduction: (
          <>
            <p>TiDB内置消息队列，SQL语法上支持订阅</p>
          </>
        ),
      },
    ],
  },
];

export const dataPrize = {
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

export interface IParticipationWelfareItem {
  icon: React.ReactNode;
  text: string;
}
export const dataParticipationWelfare: IParticipationWelfareItem[] = [
  { icon: <Icon0 />, text: '专业导师赛前辅导' },
  { icon: <Icon1 />, text: '技术同好现场交流' },
  { icon: <Icon2 />, text: '评委大咖专业指导' },
  { icon: <Icon3 />, text: '万元丰厚现金奖励' },
  { icon: <Icon4 />, text: '参赛专属周边礼包' },
  { icon: <Icon5 />, text: '优秀项目多重曝光' },
];

export interface IJudgeItem {
  avatar: StaticImageData;
  name: React.ReactNode;
  title: string;
  quotation: string;
}
export const dataJudge = [
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

export interface IFaq {
  question: string;
  answer: React.ReactNode;
}
export const dataFAQ = {
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

export const dataPartner = [
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
