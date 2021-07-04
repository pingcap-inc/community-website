import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { COOKIE_KEYS } from '~/constants';

export const getI18nProps =
  (namespaces) =>
  async ({ locale, req }) => {
    locale = req.cookies[COOKIE_KEYS.LOCALE] || locale;
    return await serverSideTranslations(locale, namespaces);
  };
