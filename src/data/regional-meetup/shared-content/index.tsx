import * as React from 'react';

export type TSharedContent = {
  title: string;
  description: React.ReactNode;
  authorName: string;
  authorTitle: string;
};

export type TSharedContents = {
  [username: string]: TSharedContent;
};

export const sharedContents: TSharedContents = {
  cw1997: {
    title: '我和 TiDB 的故事 - 我们终会在平行世界相遇',
    description: '每个人都会有自己的方向，或多或少都会受工作、生活、梦想等等的影响，甚至被左右，深陷其中不知如何选择。',
    authorName: '肖飞',
    authorTitle: '嘉里大通物流 架构师',
  },
  orgadmin: {
    title: '我和TiDB的故事 | 毫无准备地不期而遇，却想说与你相遇好幸运',
    description:
      '写这篇文章更多的是像一篇年终回忆，春节之前一直有这么个想法来回顾这一年我和TIDB奇妙的缘分，但是总被俗务缠身搁置到现在，直到表妹前段时间约稿，我知道不得不开始了。',
    authorName: '何傲',
    authorTitle: '神州数码 高级后端开发工程师',
  },
  wd05171: {
    title: 'TiDB 冷热存储分离解决方案',
    description:
      'TiDB 6.0 的 Placement Rules in SQL 功能正式 GA，用户通过 SQL 配置数据在 TiKV 集群中的放置位置，可以对数据进行直接的管理，满足不同的业务场景需要。',
    authorName: '李文杰',
    authorTitle: '网易游戏计费组 TiDB 负责人',
  },
  orgtest3: {
    title: '这一年，我和 TiDB 的故事',
    description:
      '套用现在文雅的说法，2021 Dev Conf 是故事开始的地方，去年我阴差阳错的跟着朋友参加了 TiDB Dev Conf，那时候新冠还不叫奥密克戎，很多人天真的以为，过了2021年夏天，新冠就结束了。扯远了，回到正题，2021年7月24日，坐着高铁，我来到了 Dev Conf 会场，拿着 “争做Contributor” 的牌子，假装自己也是一枚 SQL BOY。',
    authorName: '阿福chris',
    authorTitle: '济南地区活动组织者',
  },
  alfred: {
    title: '命里有时终须有--记与TiDB的一次次擦肩而过',
    description:
      '19年我司委托我一个任务，找一个数据库，能够承担起历史数据明细查询，要求有多少数据装多少数据，以较高的并发，以及用户能够忍受的时间（3秒）返回。当时团队里面有个老大哥，对比了几个数据库，有Citus、YugaByteDB、TiDB等等，TiDB是最早开始测试，也是最早放弃的...',
    authorName: '张田',
    authorTitle: '浪潮集团 架构师',
  },
};
