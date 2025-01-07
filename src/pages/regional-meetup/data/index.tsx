import type { ReactNode } from 'react';
import type { StaticImageData } from 'next/image';
import _4 from './20250107-114926.jpeg';
import _3 from './20250107-114932.jpeg';
import _2 from './20250107-114938.jpeg';
import _1 from './20250107-114946.jpeg';
import _0 from './20250107-115038.jpeg';

import React from 'react';
import Anchor from '~/components/Anchor';

export const joinUrl = 'https://forms.pingcap.com/f/regional-meetup-organizer';
export const recommendUrl = 'https://asktug.com/t/topic/664366';

// 顶部轮播图
export const headerImages: { image: StaticImageData }[] = [
  { image: _0 },
  { image: _1 },
  { image: _2 },
  { image: _3 },
  { image: _4 },
];

export const applyDescription: ReactNode = '成为地区组织者可享有哪些社区福利？';

// 社区专属福利
export const advantages: string[] = [
  '地区组织者专属徽章',
  '定制地区组织者奖杯',
  '优先邀请参与 DevCon ',
  'TiDB 最新课程的尝鲜机会',
  '500 积分和经验值',
  '组织者福利大礼包',
];

// Q&A
export const questionAndAnswer: { Q: string; A: ReactNode }[] = [
  {
    Q: '我想组织一场地区活动，但还没有找到合适的讲师怎么办？',
    A: (
      <>
        <p>
          欢迎来 asktug
          论坛（asktug.com）发帖介绍你的活动计划，并招募地区分享嘉宾，社区也会在各社群渠道协助推广寻找宝藏讲师~每一个积极参与地区交流并分享的同学我们都有丰厚的社区礼包赠送喔
        </p>
        <p>
          帖子可参考：
          <Anchor href={'https://asktug.com/t/topic/662777'} />
          （武汉嘉宾招募帖）
        </p>
      </>
    ),
  },
  {
    Q: '地区组织活动欢迎什么样的技术分享？（话题审核的标准）',
    A: (
      <>
        <p>总结“欢迎实践/原理类分享；拒接带货广告”，能帮助大家避坑，“涨姿势”的宝藏干货最欢迎👏🏻</p>
      </>
    ),
  },
  {
    Q: '社区给予地区组织多少资源来筹备活动，社区是否有运营可以给予支持？',
    A: (
      <>
        <p>
          首先，社区运营一定是非常可靠的站在组织者身边的！针对报名人数，社区会给予对应报名人数的资源支持，包括场地、零售茶歇、活动物料准备等在内的物资支持。（参考：如报名人数在20人以上则给予2000-5000元不等的物资支持）。
        </p>
      </>
    ),
  },
  {
    Q: '活动筹备中，临时遇到疫情影响，或者讲师没法来了怎么办？',
    A: (
      <>
        <p>
          如果临时遇到疫情管控，建议与报名的小伙伴以及分享嘉宾沟通是否需要延期，一起延期日期可以通过投票的方式选择。
        </p>
      </>
    ),
  },
  {
    Q: '我想组织地区活动，但怎么查看我所在的地区是否已有地区组织者？',
    A: (
      <>
        <p>
          每举办一期地区技术交流活动，我们都将在地区活动页面及时更新相关信息，如果该地区已举办过地区交流活动，你可以通过站内信与地区组织者联系，共同商议下一场活动计划喔
        </p>
      </>
    ),
  },
];
