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

export const getStaticProps = async (ctx) => {
  const isEnabled = process.env.NEXT_PUBLIC_FT_HOME;

  if (!isEnabled) {
    return {
      notFound: true,
    };
  }

  const { env } = process;
  const client = await api.initStrapiClient({
    baseUrl: env.NEXT_PUBLIC_STRAPI_BASE_URL,
    email: env.NEXT_PUBLIC_STRAPI_EMAIL,
    password: env.NEXT_PUBLIC_STRAPI_PASSWORD,
  });

  const data = await Promise.all([
    client.get('tidbio-github-info'),
    client.get('tidbio-asktug-qa-topics'),
    client.get('tidbio-asktug-blogs'),
    client.get('tidbio-blibli-recent-videos'),
  ]);
  const i18nProps = await getI18nProps(['common', 'page-home'])(ctx);
  const TEN_MINS = 10 * 60;

  return {
    props: {
      ...i18nProps,
      data: jsConvert.camelKeys(
        {
          githubInfo: data[0].data,
          forumPosts: data[1].data,
          blogs: data[2].data,
          videos: data[3].data,
        },
        {
          recursive: true,
          recursiveInArray: true,
        }
      ),
    },
    revalidate: TEN_MINS,
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
