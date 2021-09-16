import React from 'react';
import { api } from '@tidb-community/datasource';
import { useSelector } from 'react-redux';
import { useTranslation } from 'next-i18next';

import About from './about';
import List from './list';
import useSWR from 'swr';
import { CATEGORIES, TYPES, DATES, LOCATIONS } from './list/list.constants';
import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';
import { PageDataContext } from '~/context';
import { getI18nProps } from '~/utils/i18n.utils';

const fetcher = async (path, params) => {
  const client = await api.initStrapiClient();

  try {
    params = JSON.parse(params);
  } catch (err) {}

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
  const isProd = process.env.NEXT_PUBLIC_RUNTIME_ENV === 'production';

  const { t } = useTranslation('page-activities');
  const { filters, current, pageSize } = useSelector((state) => state.activities);

  const params = {
    _limit: pageSize,
    _publicationState: isProd ? undefined : 'preview',
    _start: (current - 1) * pageSize,
    category: filters.category === CATEGORIES[0] ? undefined : filters.category,
    type: filters.type === TYPES[0] ? undefined : filters.type,
    date: filters.date === DATES[0] ? undefined : filters.date,
    location: filters.location === LOCATIONS[0] ? undefined : filters.location,
  };
  const { data: activities = [] } = useSWR(['tidbio-activitiespage-activities', JSON.stringify(params)], fetcher);
  const { data: total } = useSWR(['tidbio-activitiespage-activities/count', JSON.stringify(params)], fetcher);

  const data = {
    activities,
    total,
  };

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
