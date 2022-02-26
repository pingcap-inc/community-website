// import * as R from 'ramda';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// import { COOKIE_KEYS } from '~/constants';

export const getI18nProps =
  (namespaces) =>
  // async ({ locale, req }) => {
  async () => {
    // locale = R.pathOr(locale, ['cookies', COOKIE_KEYS.LOCALE])(req);
    return await serverSideTranslations('zh', namespaces);
  };
