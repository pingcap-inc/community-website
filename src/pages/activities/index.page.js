import React from 'react';
import { useTranslation } from 'next-i18next';

import About from './about';
import List from './list';
import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';
import { PageDataContext } from '~/context';
import { getI18nProps } from '~/utils/i18n.utils';

export const getServerSideProps = async (ctx) => {
  const { env } = process;
  const isEnabled = env.NEXT_PUBLIC_FT_ACTIVITIES;

  const i18nProps = await getI18nProps(['common', 'page-activities'])(ctx);

  if (!isEnabled) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...i18nProps,
    },
  };
};

const Page = ({ data }) => {
  const { t } = useTranslation('page-activities');

  return (
    <PageDataContext.Provider value={{ data }}>
      <CommunityHead title={t('pageTitle')} />

      <CoreLayout domain="tidb.io">
        <About />
        <List />
      </CoreLayout>
    </PageDataContext.Provider>
  );
};

export default Page;
