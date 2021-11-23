export const navItems = [
  {
    title: '社区首页',
    link: 'https://tidb.io',
  },
  {
    title: '学习',
    items: [
      {
        title: '文档',
        link: 'https://docs.pingcap.com/zh/tidb/stable',
      },
      {
        title: '博客',
        link: 'https://asktug.com/c/blog/l/latest',
      },
      {
        title: '在线课程',
        items: [
          {
            title: 'TiDB DBA 课程',
            link: 'https://learn.pingcap.com/learner/course',
          },
          {
            title: 'Talent Plan 课程',
            link: 'https://university.pingcap.com/talent-plan/',
          },
        ],
      },
      {
        title: '考试认证',
        items: [
          {
            title: 'PingCAP Certified TiDB Associate (PCTA)',
            link: 'https://learn.pingcap.com/learner/exam-market/list?category=PCTA',
          },
          {
            title: 'PingCAP Certified TiDB Professional (PCTP)',
            link: 'https://learn.pingcap.com/learner/exam-market/list?category=PCTP',
          },
        ],
      },
    ],
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
    title: '活动',
    link: 'https://tidb.io/events',
  },
  {
    title: '社区',
    items: [
      {
        title: 'Talent Plan',
        link: 'https://tidb.io/talent-plan',
      },
      {
        title: '社区行为准则',
        link: 'https://github.com/pingcap/community/blob/master/CODE_OF_CONDUCT.md',
      },
      {
        title: '用户组',
        link: 'https://tidb.io/tug',
        items: [
          {
            title: '加入用户组',
            link: 'https://tidb.io/tug/apply',
          },
          {
            title: 'MVA',
            link: 'https://tidb.io/tug/mva',
          },
        ],
      },
      {
        title: 'Contributor',
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
            title: '孵化器项目',
            link: 'https://contributor.tidb.io/incubator',
          },
        ],
      },
      {
        title: '工作机会',
        link: 'https://tidb-jobs.pingcap.com/',
      },
      {
        title: 'Slack',
        link: 'https://slack.tidb.io/invite?team=tidb-community&channel=everyone',
      },
      {
        title: '邮件列表',
        link: 'https://lists.tidb.io/g/main/subgroups',
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
        title: 'TiDB 和 PingCAP',
        link: 'https://pingcap.com',
      },
      {
        title: '商业支持',
        link: 'https://pingcap.com/about-cn/#contact-us',
      },
    ],
  },
];

export const genUserProfileItems = ({ meData, redDots }) => {
  if (!meData) return;

  const items = [
    {
      title: meData.username,
      divider: true,
    },
    {
      title: '个人信息',
      link: `https://tidb.io/my/profile`,
      badge: redDots.companyInfo,
    },
    {
      title: '账号设置',
      link: `https://tidb.io/my/settings`,
    },
  ];

  // has been logged in and joined an org
  if (meData.org) {
    items.push({
      title: '我的团队',
      link: `https://tidb.io/orgs/${meData.org.slug}/home`,
    });
  } else {
    items.splice(1, 0, {
      title: '团队认证',
      link: 'https://tidb.io/account/organization/new',
      badge: redDots.orgEnroll,
    });
  }

  if (meData.org_invitations?.length) {
    items.push({
      title: '团队邀请',
      link: 'https://tidb.io/account/organization/invitations',
      badge: meData.org_invitations.some((item) => item.valid),
    });
  }

  items.push(
    {
      title: '团队权益',
      link: 'https://tidb.io/account/organization/benefits',
    },
    {
      title: '退出登录',
      event: 'onLogoutClick',
    }
  );

  return items;
};
