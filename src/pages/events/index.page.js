import * as R from 'ramda';
import React from 'react';
import useSWR from 'swr';
import { api } from '@tidb-community/datasource';
import { useSelector } from 'react-redux';
import { useTranslation } from 'next-i18next';

//  TODO: comment out About module as Calendar is not ready for MVP
import About from './about';
import Cooperation from './cooperation';
import List from './list';
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
  const i18nProps = await getI18nProps(['common', 'page-events'])(ctx);
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

  const { t } = useTranslation('page-events');
  const { filters, current, pageSize } = useSelector((state) => state.events);

  const dataParam = (() => {
    let year;
    const { date } = filters;

    if (!date || date === R.head(DATES)) {
      return;
    }

    if (date === R.last(DATES)) {
      year = parseInt(R.compose(R.head, R.takeLast(2))(DATES), 10);
      return {
        date_lt: year,
      };
    }

    year = parseInt(date, 10);
    return {
      date_gte: year,
      date_lte: year + 1,
    };
  })();

  const params = {
    _limit: pageSize,
    _publicationState: isProd ? undefined : 'preview',
    _sort: 'date:DESC',
    _start: (current - 1) * pageSize,
    category: filters.category === R.head(CATEGORIES) ? undefined : filters.category,
    type: filters.type === R.head(TYPES) ? undefined : filters.type,
    location: filters.location === R.head(LOCATIONS) ? undefined : filters.location,
    ...dataParam,
  };
  const { data: events } = useSWR(['tidbio-activitiespage-activities', JSON.stringify(params)], fetcher);
  const { data: total } = useSWR(['tidbio-activitiespage-activities/count', JSON.stringify(params)], fetcher);

  const data = {
    events,
    total,
  };

  // eslint-disable-next-line no-console
  console.log('tidbio-activitiespage-activities', activities);

  return (
    <PageDataContext.Provider value={{ data }}>
      <CommunityHead title={t('pageTitle')} />

      <CoreLayout>
        <About />
        <List />
        <Cooperation />
      </CoreLayout>
    </PageDataContext.Provider>
  );
};

export default Page;
