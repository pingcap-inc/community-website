import React from 'react';
import { api } from '@tidb-community/datasource';
import { useTranslation } from 'next-i18next';

import About from './about';
import List from './list';
import useSWR from 'swr';
import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';
import { PageDataContext } from '~/context';
import { getI18nProps } from '~/utils/i18n.utils';

const fetcher = async (path, params) => {
  console.log('fetcher path!!', path, params);
  const client = await api.initStrapiClient();
  console.log('client!!', client);

  return client.get(path, {
    params,
  });
};

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common', 'page-activities'])(ctx);
  const isEnabled = process.env.NEXT_PUBLIC_FT_ACTIVITIES;

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

const Page = () => {
  const { t } = useTranslation('page-activities');
  const { data } = useSWR(['tidbio-activitiespage-activities'], fetcher, {
    // Default configs could be found from
    // https://github.com/vercel/swr/blob/master/src/config.ts
    revalidateOnFocus: false,
  });

  console.log('data!!', data);

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
