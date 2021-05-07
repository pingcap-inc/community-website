export const navItems = [
  {
    title: '首页',
    link: 'https://tidb.io',
  },
  {
    title: '问答',
    link: 'https://asktug.com',
    items: [
      {
        title: '问答之星',
        link: 'https://asktug.com/x/ranking',
      },
    ],
  },
  {
    title: '用户组',
    link: 'https://tug.tidb.io',
    items: [
      {
        title: '加入用户组',
        link: 'https://tug.tidb.io/people',
      },
      {
        title: 'MVA',
        link: 'https://tug.tidb.io/mva',
      },
    ],
  },
  {
    title: '开发者社区',
    link: 'https://contributor.tidb.io',
    items: [
      {
        title: '如何参与贡献',
        items: [
          {
            title: '源码阅读系列文章',
            link: 'https://pingcap.com/blog-cn/#TiDB-%e6%ba%90%e7%a0%81%e9%98%85%e8%af%bb',
          },
          {
            title: 'Talent Plan',
            link: 'https://university.pingcap.com/talent-plan/',
          },
        ],
      },
      {
        title: '特殊兴趣小组(SIG)',
        link: 'https://contributor.tidb.io/sig',
      },
      {
        title: '人员',
        items: [
          {
            title: 'Maintainers',
            link: 'https://contributor.tidb.io/people/maintainer',
          },
          {
            title: 'Committer',
            link: 'https://contributor.tidb.io/people/committer',
          },
          {
            title: 'Reviewer',
            link: 'https://contributor.tidb.io/people/reviewer',
          },
          {
            title: 'Active Contributor',
            link: 'https://contributor.tidb.io/people/active-contributor',
          },
          {
            title: 'Contributor',
            link: 'https://contributor.tidb.io/people/contributor',
          },
        ],
      },
      {
        title: '贡献者排行榜',
        link: 'https://contributor.tidb.io/ranking',
      },
      {
        title: '孵化器项目',
        link: 'https://contributor.tidb.io/incubator',
      },
    ],
  },
  {
    title: '学习',
    items: [
      {
        title: 'TiDB DBA 课程',
        link: 'https://university.pingcap.com/',
      },
      {
        title: 'Talent Plan 课程',
        link: 'https://university.pingcap.com/talent-plan/',
      },
      {
        title: 'PingCAP Certified TiDB Associate (PCTA)',
        link: 'https://university.pingcap.com/certificate/PCTA/',
      },
      {
        title: 'PingCAP Certified TiDB Professional (PCTP)',
        link: 'https://university.pingcap.com/certificate/PCTP/',
      },
    ],
  },
  {
    title: '活动',
    link: 'https://contributor.tidb.io/events',
  },
  {
    title: '资源',
    items: [
      {
        title: 'Slack',
        link: 'https://slack.tidb.io/invite?team=tidb-community&channel=everyone',
      },
      {
        title: '邮件列表',
        link: 'https://lists.tidb.io/g/main/subgroups',
      },
      {
        title: '文档',
        link: 'https://docs.pingcap.com/tidb/stable',
      },
      {
        title: '博客',
        link: 'https://asktug.com/c/blog/l/latest',
      },
      {
        title: '名企直推',
        link: 'https://pingcap.com/community-cn/careers/join/',
      },
    ],
  },
  {
    title: '兑换礼品',
    link: 'https://accounts.pingcap.com/points#/shop',
  },
  {
    title: '关于',
    items: [
      {
        title: '社区行为准则',
        link: 'https://github.com/pingcap/community/blob/master/CODE_OF_CONDUCT.md',
      },
      {
        title: 'TiDB 和 PingCAP',
        link: 'https://pingcap.com',
      },
    ],
  },
];

export const genUserProfileItems = (meData) => {
  if (meData) {
    // already login
    if (meData.org) {
      // already in a org
      return [
        {
          title: '我的企业',
          link: `https://tug.tidb.io/orgs/${meData.org.slug}/members`,
        },
        {
          title: '退出登陆',
          link: `https://tug.tidb.io/logout`,
        },
      ];
    } else {
      // not in a org
      return [
        {
          title: '企业会员认证',
          link: `https://tug.tidb.io/account/organization/new`,
        },
        {
          title: '退出登陆',
          link: `https://tug.tidb.io/logout`,
        },
      ];
    }
  } else {
    return undefined;
  }
};
