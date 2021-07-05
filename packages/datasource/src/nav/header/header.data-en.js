export const navItems = [
  {
    title: 'Home',
    link: 'https://tidb.io',
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
            link: 'https://university.pingcap.com/',
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
            link: 'https://university.pingcap.com/certificate/PCTA/',
          },
          {
            title: 'PingCAP Certified TiDB Professional (PCTP)',
            link: 'https://university.pingcap.com/certificate/PCTP/',
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
    link: 'https://tidb.io/archived/events/#activities',
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
        link: 'https://tug.tidb.io',
        items: [
          {
            title: 'Join TiDB User Group',
            link: 'https://tug.tidb.io/people',
          },
          {
            title: 'MVA',
            link: 'https://tug.tidb.io/mva',
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
            title: 'Special Interest Group (SIG)',
            link: 'https://contributor.tidb.io/sig',
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
      link: `https://tidb.io/my/profile`,
      badge: redDots.companyInfo,
    },
    {
      title: 'Account Settings',
      link: `https://tidb.io/my/settings`,
    },
  ];

  // has been logged in and joined an org
  if (meData.org) {
    items.push({
      title: 'My Org',
      link: `https://tidb.io/orgs/${meData.org.slug}/home`,
    });
  } else {
    items.splice(1, 0, {
      title: 'Create Org',
      link: 'https://tidb.io/account/organization/new',
      badge: redDots.orgEnroll,
    });
  }

  if (meData.org_invitations?.length) {
    items.push({
      title: 'Invitations',
      link: 'https://tidb.io/account/organization/invitations',
      badge: meData.org_invitations.some((item) => item.valid),
    });
  }

  items.push(
    {
      title: 'Org Benefits',
      link: 'https://tidb.io/account/organization/benefits',
    },
    {
      title: 'Logout',
      event: 'onLogoutClick',
    }
  );

  return items;
};
