import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { cookieKeys } from '~/constants';

export const getI18nProps =
  (namespaces) =>
  async ({ locale, req }) => {
    locale = req.cookies[cookieKeys.locale] || locale;
    return await serverSideTranslations(locale, namespaces);
  };
