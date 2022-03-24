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
import { getLatestBlog } from '~/pages/home/blogs/api';

// FIXME: temporily rollback ISR back to SSR due to a CI build error
// We need to fix the circular dependencies issue with i18n locales
// const TEN_MINS = 10 * 60;

export const getServerSideProps = async (ctx) => {
  const client = await api.initStrapiClient();
  const isProd = process.env.NEXT_PUBLIC_RUNTIME_ENV === 'production';

  const strapiQuery = {
    params: {
      _publicationState: isProd ? undefined : 'preview',
    },
  };

  const data = await Promise.all([
    client.get('tidbio-github-info'),
    client.get('tidbio-asktug-qa-topics'),
    getLatestBlog(), // client.get('tidbio-asktug-blogs'),
    client.get('tidbio-blibli-recent-videos'),
    client.get('tidbio-homepage-banner-promotions', strapiQuery),
    client.get('tidbio-homepage-main-activities', strapiQuery),
    client.get('tidbio-homepage-meetups', strapiQuery),
    client.get('tidbio-homepage-dev-activities', strapiQuery),
  ]);

  const i18nProps = await getI18nProps(['common', 'page-home'])(ctx);

  return {
    props: {
      ...i18nProps,
      data: jsConvert.camelKeys(
        {
          githubInfo: data[0].data,
          forumPosts: data[1].data,
          blogs: data[2],
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

    <CoreLayout>
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
