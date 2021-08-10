import React from 'react';

import Banner from './banner';
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

    <CoreLayout domain="tidb.io" hasMargin>
      <Banner />
      <Welcome />
    </CoreLayout>
  </>
);

export default Page;
