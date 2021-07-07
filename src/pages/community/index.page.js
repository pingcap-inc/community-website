import React from 'react';

import Activities from './activities';
import Banner from './banner';
import Career from './career';
import Contributor from './contributor';
import Learning from './learning';
import UserGroup from './userGroup';
import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';
import { getI18nProps } from '~/utils/i18n.utils';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common', 'page-community'])(ctx);

  return {
    props: {
      ...i18nProps,
    },
  };
};

const Page = () => (
  <>
    <CommunityHead />

    <CoreLayout domain="tidb.io" hasMargin locale="en">
      <Banner />
      <Activities />
      <Learning />
      <UserGroup />
      <Contributor />
      <Career />
    </CoreLayout>
  </>
);

export default Page;
