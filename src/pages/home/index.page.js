import React from 'react';

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

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common', 'page-home'])(ctx);

  return {
    props: {
      ...i18nProps,
    },
  };
};

const Page = () => (
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

export default Page;
