import React from 'react';
import jsConvert from 'js-convert-case';
import { api } from '@tidb-community/datasource';
import type { GetStaticProps, NextPage } from 'next';

import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';
import { PageDataContext } from '~/context';
import { getLatestBlog } from '~/pages/home/blogs/api';

import Activities from './activities';
import Banner from './banner';
import Blogs from './blogs';
import Contribution from './contribution';
import Forum from './forum';
import Learning from './learning';
import Others from './others';
import Subscription from './subscription';
import Welcome from './welcome';

export const getStaticProps: GetStaticProps = async () => {
  const client = await api.initStrapiClient();
  const isProd = process.env.NEXT_PUBLIC_RUNTIME_ENV === 'production';

  const strapiQuery = {
    params: {
      _publicationState: isProd ? undefined : 'preview',
    },
  };

  const [githubInfo, forumPosts, blogs, videos, promotions, activities, meetups, devActivities] = await Promise.all([
    client.get('tidbio-github-info'),
    client.get('tidbio-asktug-qa-topics'),
    getLatestBlog(), // client.get('tidbio-asktug-blogs'),
    client.get('tidbio-blibli-recent-videos'),
    client.get('tidbio-homepage-banner-promotions', strapiQuery),
    client.get('tidbio-homepage-main-activities', strapiQuery),
    client.get('tidbio-homepage-meetups', strapiQuery),
    client.get('tidbio-homepage-dev-activities', strapiQuery),
  ]);

  return {
    props: {
      data: jsConvert.camelKeys(
        {
          githubInfo: githubInfo.data,
          forumPosts: forumPosts.data,
          blogs,
          videos: videos.data,
          promotions,
          activities,
          meetups,
          devActivities,
        },
        {
          recursive: true,
          recursiveInArray: true,
        }
      ),
    },
    // TODO: prop revalidate is moved to getStaticProps at latest version of next.js
    revalidate: 60 * 10,
  };
};

const Page: NextPage<{ data: any }> = ({ data }) => (
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
