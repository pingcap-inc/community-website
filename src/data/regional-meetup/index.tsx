import type { ReactNode } from 'react';
import type { StaticImageData } from 'next/image';

import photo广州Image from './广州.jpg';
import photo天津Image from './天津.jpg';
import photo武汉Image from './武汉.jpg';
import photo济南Image from './济南.jpg';
import photo石家庄Image from './石家庄.jpg';
import React from 'react';
import Anchor from '~/components/Anchor';

export const joinUrl = '#';

// 顶部轮播图
export const headerImages: { image: StaticImageData }[] = [
  { image: photo广州Image },
  { image: photo天津Image },
  { image: photo武汉Image },
  { image: photo济南Image },
  { image: photo石家庄Image },
];

export const applyDescription: ReactNode = '申请成功可获得精美周边礼品 + 社区专属福利';

// 社区专属福利
export const advantages: string[] = [
  '地区组织者专属徽章',
  '社区 ID 定制咖啡杯',
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
        <p>欢迎来 asktug 论坛（asktug.com）发帖，社区也会在各社群渠道协助推广寻找宝藏讲师~</p>
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
    Q: '我想组织一场地区活动，但还没有找到合适的讲师怎么办？',
    A: (
      <>
        <p>活动筹备中，临时遇到疫情影响，或者讲师没法来了怎么办？</p>
      </>
    ),
  },
  {
    Q: '如果临时遇到疫情管控，建议与报名的小伙伴以及分享嘉宾沟通是否需要延期，一起延期日期可以通过投票的方式选择。',
    A: (
      <>
        <p>不知道我所在的区域有没有地区组织者，如何找到组织？</p>
      </>
    ),
  },
];
