export const navItems = [
  {
    title: 'Home',
    link: 'https://tidb.net',
  },
  {
    title: 'Learning',
    items: [
      {
        title: 'Docs',
        link: 'https://docs.pingcap.com/tidb/stable',
      },
      {
        title: 'Blogs',
        link: 'https://asktug.com/c/blog/l/latest',
      },
      {
        title: 'Online Courses',
        items: [
          {
            title: 'TiDB DBA Courses',
            link: 'https://learn.pingcap.com/learner/course',
          },
          {
            title: 'Talent Plan Courses',
            link: 'https://university.pingcap.com/talent-plan/',
          },
        ],
      },
      {
        title: 'Certification',
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
    title: 'Forum',
    link: 'https://asktug.com',
    items: [
      {
        title: 'AskTUG Rankings',
        link: 'https://asktug.com/x/ranking',
      },
    ],
  },
  {
    title: 'Events',
    link: 'https://tidb.net/events',
  },
  {
    title: 'Blog',
    link: 'https://tidb.net/blog',
  },
  {
    title: 'Community',
    items: [
      {
        title: 'Code of Conduct',
        link: 'https://github.com/pingcap/community/blob/master/CODE_OF_CONDUCT.md',
      },
      {
        title: 'User Group',
        link: 'https://tidb.net/tug',
        items: [
          {
            title: 'Join TiDB User Group',
            link: 'https://tidb.net/tug/apply',
          },
          {
            title: 'MVA',
            link: 'https://tidb.net/tug/mva',
          },
        ],
      },
      {
        title: 'Contributor Group',
        link: 'https://contributor.tidb.io',
        items: [
          {
            title: 'Contribution',
            items: [
              {
                title: 'Source Code Learning',
                link: 'https://pingcap.com/blog-cn/#TiDB-%e6%ba%90%e7%a0%81%e9%98%85%e8%af%bb',
              },
              {
                title: 'Talent Plan',
                link: 'https://university.pingcap.com/talent-plan/',
              },
            ],
          },
          {
            title: 'People',
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
            title: 'Incubator Program',
            link: 'https://contributor.tidb.io/incubator',
          },
        ],
      },
      {
        title: 'Jobs',
        link: 'https://tidb-jobs.pingcap.com/',
      },
      {
        title: 'Slack',
        link: 'https://slack.tidb.io/invite?team=tidb-community&channel=everyone',
      },
      {
        title: 'Mailing Lists',
        link: 'https://lists.tidb.io/g/main/subgroups',
      },
    ],
  },
  {
    title: 'Redeem Gifts',
    link: 'https://accounts.pingcap.com/points#/shop',
  },
  {
    title: 'About',
    items: [
      {
        title: 'TiDB and PingCAP',
        link: 'https://pingcap.com',
      },
      {
        title: 'Business Support',
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
      title: 'Profile',
      link: `https://tidb.net/my/profile`,
      badge: redDots.companyInfo,
    },
    {
      title: 'Account Settings',
      link: `https://tidb.net/my/settings`,
    },
  ];

  // has been logged in and joined an org
  if (meData.org) {
    items.push({
      title: 'My Org',
      link: `https://tidb.net/orgs/${meData.org.slug}/home`,
    });
  } else {
    items.splice(1, 0, {
      title: 'Create Org',
      link: 'https://tidb.net/account/organization/new',
      badge: redDots.orgEnroll,
    });
  }

  if (meData.org_invitations?.length) {
    items.push({
      title: 'Invitations',
      link: 'https://tidb.net/account/organization/invitations',
      badge: meData.org_invitations.some((item) => item.valid),
    });
  }

  items.push(
    {
      title: 'Org Benefits',
      link: 'https://tidb.net/account/organization/benefits',
    },
    {
      title: 'Logout',
      event: 'onLogoutClick',
    }
  );

  return items;
};
