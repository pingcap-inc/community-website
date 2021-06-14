import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Activities from './activities';
import Banner from './banner';
import Career from './career';
import Contributor from './contributor';
import Learning from './learning';
import UserGroup from './userGroup';
import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';
import { cookieKeys } from '~/constants';

export async function getServerSideProps({ locale, req }) {
  locale = req.cookies[cookieKeys.locale] || locale;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'page-community'])),
    },
  };
}

const Community = () => (
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

export default Community;
