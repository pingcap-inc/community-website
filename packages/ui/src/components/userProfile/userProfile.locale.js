const localeData = {
  en: {
    'login': 'Sign in / Login',
    'my-org': 'My Org',
    'join-org': 'Join Org',
    'org-invitation': 'Org Invitation',
    'log-out': 'Logout',
  },
  zh: {
    'login': '注册 / 登陆',
    'my-org': '我的企业',
    'join-org': '企业会员认证',
    'org-invitation': '企业邀请',
    'log-out': '退出登陆',
  },
};

export const t = locale => key => localeData[locale][key] || key;
