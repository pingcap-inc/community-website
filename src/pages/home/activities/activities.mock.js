import * as R from 'ramda';

export const activities = R.repeat(
  {
    title: '2020 年黑客马拉松 2020 年黑客马拉松',
    img: 'https://pingcap.com/static/tidb-hackathon2020-62c1c40e7dd9eb4a0eed8d00ea6507e5.jpg',
    link: 'https://tidb.io/archived/events/hackathon2020/',
    location: '北京',
    type: '线上',
    date: '2021-08-21T00:00:00Z',
    intro:
      'TiDB Hacking Camp 是一个长期的孵化项目，每年举办 1-3 期。活动联合了生态伙伴、合作企业等，旨在帮助 TiDB 生态项目从社区中获取更多资源和帮助。',
  },
  3
);

export const meetups = R.repeat(
  {
    title: '2020 年黑客马拉松 2020 年黑客马拉松',
    link: 'https://tidb.io/archived/events/hackathon2020/',
    status: '报名中',
    type: '线上/线下',
    date: '2021-08-21T00:00:00Z',
  },
  3
);

export const devActivities = meetups;
