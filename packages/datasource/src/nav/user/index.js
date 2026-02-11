const genUserMenu = (meData) =>
  meData
    ? [
        {
          title: '个人信息',
          link: `https://pingkai.cn/tidbcommunity/user/${meData.id}/info`,
        },
      ]
    : [];

export default genUserMenu;
