import * as R from 'ramda';

export const blogs = R.repeat(
  {
    title:
      '通过 operator 部署的 promethues 节点磁盘占用过多，10天数据占80G,麻烦各位大神帮忙解决下在帮助 TiDB 生态项目从社区中获取更多资源和帮助。 ',
    link: 'https://asktug.com/t/topic/123306',
    user: {
      avatar: 'https://asktug.com/user_avatar/asktug.com/luzizhuo/90/99462_2.png',
      name: 'fergus',
    },
    createdTime: '2021-08-21T00:00:00Z',
  },
  5
);
