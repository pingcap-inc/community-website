const genImg = (name) => `https://pingcap.com/images/community/careers/${name}.png`;

const genLink = (id) => `https://pingcap.com/community-cn/careers/${id}/`;

const data = {
  job: {
    title: 'Job Board',
    items: [
      {
        icon: genImg('paypay'),
        position: '资深 DBA 工程师',
        location: '上海',
        link: genLink('paypay/dba'),
      },
      {
        icon: genImg('yichewang'),
        position: 'DBA',
        location: '北京',
        link: genLink('yichewang/dba'),
      },
      {
        icon: genImg('zhangmen'),
        position: 'DBA - TiDB 专岗',
        location: '上海',
        link: genLink('zhangmen/dba-tidb'),
      },
      {
        icon: genImg('huya'),
        position: 'DBA 工程师',
        location: '广州',
        link: genLink('huya/dba'),
      },
      {
        icon: genImg('xiaomi'),
        position: 'DBA 工程师',
        location: '北京',
        link: genLink('xiaomi/dba'),
      },
      {
        icon: genImg('kingSoft'),
        position: 'DBA 运维开发',
        location: '广州/珠海',
        link: genLink('kingsoft/dba'),
      },
      {
        icon: genImg('ucloud'),
        position: 'Go 研发工程师',
        location: '上海',
        link: genLink('go-engineer-paas'),
      },
      {
        icon: genImg('ucloud'),
        position: 'Go 研发工程师',
        location: '上海',
        link: genLink('go-engineer-tidb'),
      },
    ],
  },
};

export default data;
