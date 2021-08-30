import React from 'react';
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

  const data = await Promise.all([client.get('tidbio-github-info')]);
  const i18nProps = await getI18nProps(['common', 'page-home'])(ctx);

  const TEN_MINS = 10 * 60;

  return {
    props: {
      ...i18nProps,
      data: {
        githubInfo: data[0].data,
      },
    },
    revalidate: TEN_MINS,
  };
};

const Page = ({ data }) => {
  console.log('data!!', data);

  return (
    <>
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
    </>
  );
};

export default Page;
