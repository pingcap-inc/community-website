const genImg = name => `https://pingcap.com/images/community/careers/${name}.png`;

const genLink = id => `https://pingcap.com/community-cn/careers/${id}/`;

const data = {
  title: 'Career',
  desc:
    'Here you can find attractive job opportunities posted by TiDB users. It’s free to post and apply for a job. Wish you the best of luck in your search!',
  cert: {
    title: 'Certification'
  },
  job: {
    title: 'Job Board',
    items: [
      {
        icon: genImg('paypay'),
        position: '资深 DBA 工程师',
        location: '上海',
        link: genLink('paypay/dba')
      },
      {
        icon: genImg('paypay'),
        position: '资深 DBA 工程师',
        location: '上海',
        link: genLink('paypay/dba')
      },
      {
        icon: genImg('paypay'),
        position: '资深 DBA 工程师',
        location: '上海',
        link: genLink('paypay/dba')
      },
      {
        icon: genImg('paypay'),
        position: '资深 DBA 工程师',
        location: '上海',
        link: genLink('paypay/dba')
      },
      {
        icon: genImg('paypay'),
        position: '资深 DBA 工程师',
        location: '上海',
        link: genLink('paypay/dba')
      },
      {
        icon: genImg('paypay'),
        position: '资深 DBA 工程师',
        location: '上海'
      },
      {
        icon: genImg('paypay'),
        position: '资深 DBA 工程师',
        location: '上海'
      },
      {
        icon: genImg('paypay'),
        position: '资深 DBA 工程师',
        location: '上海'
      }
    ]
  }
};

export default data;
