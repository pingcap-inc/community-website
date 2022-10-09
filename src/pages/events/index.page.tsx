import * as R from 'ramda';
import React from 'react';
import { api } from '@tidb-community/datasource';
import constants from './index/constant.json';
import About from './index/about';
import Cooperation from './index/cooperation';
import List from './index/list';
import { CATEGORIES, DATES, LOCATIONS, TYPES } from './index/list/list.constants';
import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';
import { getI18nProps } from '~/utils/i18n.utils';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { setUndefinedWhenItemIsEmpty } from '~/utils/request.utils';

async function fetcher<T>(path, params): Promise<T> {
  const instance = await api.cms.getInstanceOnServer();
  const response = await instance.get<T>(path, { params });
  return response.data;
}

const isProd = process.env.NEXT_PUBLIC_RUNTIME_ENV === 'production';

export const defaultPageSize = 8;

/**
 * get years range by input date parameter
 * @param date
 * @returns {{date_lt: number} | {date_gte: number, date_lte: number}}
 */
const getStrapiDateParams = (date): { date_lt: number } | { date_gte: number; date_lte: number } => {
  let year;
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
};

const getParamsFromQueryString = (query) => {
  const processedQuery = setUndefinedWhenItemIsEmpty(query);
  return {
    ...api.cms.getStrapiPaginationParams(query.pageNumber, defaultPageSize),
    _publicationState: isProd ? undefined : 'preview',
    _sort: 'date:DESC',
    category: processedQuery.category === R.head(CATEGORIES) ? undefined : processedQuery.category,
    type: processedQuery.type === R.head(TYPES) ? undefined : processedQuery.type,
    location: processedQuery.location === R.head(LOCATIONS) ? undefined : processedQuery.location,
    ...getStrapiDateParams(processedQuery.date),
  };
};

const getCalendarParamsFromQueryString = () => {
  //const {calendarYearStr} = query
  //const calendarYear = getNumberFromQuery(calendarYearStr, (new Date()).getFullYear())
  return {
    _publicationState: isProd ? undefined : 'preview',
  };
};

export interface IImage {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: any;
    large: any;
    medium: any;
    small: any;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface IEvent {
  id: number;
  title: string;
  location: string;
  type: string;
  date: Date;
  category: string;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
  link: string;
  startDate: Date;
  endDate: Date;
  image: IImage[];
}

export interface IQuery extends ParsedUrlQuery {
  pageNumber?: string;
  date?: string;
  category?: string;
  type?: string;
  location?: string;
  calendarYear?: string;
}

export interface IProps {
  events: IEvent[];
  total: number;
  calendarEvents: IEvent[];
}

export const getServerSideProps: GetServerSideProps<IProps, IQuery> = async (ctx) => {
  //@ts-ignore
  const i18nProps = await getI18nProps(['common', 'page-events'])(ctx);
  const isEnabled = process.env.NEXT_PUBLIC_FT_ACTIVITIES;
  if (!isEnabled) {
    return {
      notFound: true,
    };
  }

  const { query } = ctx;
  const params = getParamsFromQueryString(query);
  const paramsForCalendar = getCalendarParamsFromQueryString();
  const [events, total, calendarEvents] = await Promise.all([
    fetcher<IEvent[]>('tidbio-activitiespage-activities', params),
    fetcher<number>('tidbio-activitiespage-activities/count', params),
    fetcher<IEvent[]>('tidbio-activitiespage-activities', paramsForCalendar),
  ]);

  return {
    props: {
      ...i18nProps,
      events,
      total,
      calendarEvents,
    },
  };
};

export default function EventsIndexPage(props: IProps) {
  const { events, total, calendarEvents } = props;
  return (
    <>
      <CommunityHead
        title={constants.pageTitle}
        description={
          'TiDB 社区自成立以来，每年都会举办各类丰富多彩的活动，覆盖了全球几万名来自不同领域的开发者、TiDB 用户和爱好者。在这里你可以了解 TiDB 社区即将举办的线上、线下的活动、meetup 和竞赛等信息。'
        }
      />
      <CoreLayout>
        <About events={calendarEvents} />
        <List events={events} total={total} />
        <Cooperation />
      </CoreLayout>
    </>
  );
}
