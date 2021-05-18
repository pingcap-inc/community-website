const genUserMenu = (meData) =>
  meData
    ? [
        {
          title: '个人信息',
          link: `https://tidb.io/user/${meData.id}/info`,
        },
        {
          title: '团队信息',
          link: `https://tidb.io/user/${meData.id}/org`,
        },
      ]
    : [];

export default genUserMenu;
