const genUserMenu = (meData) =>
  meData
    ? [
        {
          title: '个人信息',
          link: `https://tidb.net/user/${meData.id}/info`,
        },
      ]
    : [];

export default genUserMenu;
