const localeData = {
  en: {
    login: 'Sign in / Login',
  },
  zh: {
    login: '注册 / 登陆',
  },
};

export const t = (locale) => (key) => localeData[locale][key] || key;
