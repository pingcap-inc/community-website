import React from 'react';
import jsConvert from 'js-convert-case';
import { api } from '@tidb-community/datasource';

import Activities from './activities';
import Banner from './banner';
import Blogs from './blogs';
import Contribution from './contribution';
import Forum from './forum';
import Learning from './learning';
import Others from './others';
import Subscription from './subscription';
import Welcome from './welcome';
import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';
import { PageDataContext } from '~/context';
import { getI18nProps } from '~/utils/i18n.utils';

export const getServerSideProps = async (ctx) => {
  const { env } = process;
  const isProd = env.NEXT_PUBLIC_RUNTIME_ENV === 'production';
  const isEnabled = env.NEXT_PUBLIC_FT_HOME;

  if (!isEnabled) {
    return {
      notFound: true,
    };
  }

  const client = await api.initStrapiClient({
    baseUrl: env.NEXT_PUBLIC_STRAPI_BASE_URL,
    email: env.NEXT_PUBLIC_STRAPI_EMAIL,
    password: env.NEXT_PUBLIC_STRAPI_PASSWORD,
  });

  const strapiQuery = {
    params: {
      _publicationState: isProd ? undefined : 'preview',
    },
  };
  const data = await Promise.all([
    client.get('tidbio-github-info'),
    client.get('tidbio-asktug-qa-topics'),
    client.get('tidbio-asktug-blogs'),
    client.get('tidbio-blibli-recent-videos'),
    client.get('tidbio-homepage-banner-promotions', strapiQuery),
    client.get('tidbio-homepage-main-activities', strapiQuery),
    client.get('tidbio-homepage-meetups', strapiQuery),
    client.get('tidbio-homepage-dev-activities', strapiQuery),
  ]);
  const i18nProps = await getI18nProps(['common', 'page-home'])(ctx);
  // const TEN_MINS = 10 * 60;

  return {
    props: {
      ...i18nProps,
      data: jsConvert.camelKeys(
        {
          githubInfo: data[0].data,
          forumPosts: data[1].data,
          blogs: data[2].data,
          videos: data[3].data,
          promotions: data[4],
          activities: data[5],
          meetups: data[6],
          devActivities: data[7],
        },
        {
          recursive: true,
          recursiveInArray: true,
        }
      ),
    },
    // revalidate: TEN_MINS,
  };
};

const Page = ({ data }) => (
  <PageDataContext.Provider value={{ data }}>
    <CommunityHead />

    <CoreLayout domain="tidb.io">
      <Banner />
      <Welcome />
      <Forum />
      <Blogs />
      <Activities />
      <Learning />
      <Contribution />
      <Others />
      <Subscription />
    </CoreLayout>
  </PageDataContext.Provider>
);

export default Page;
