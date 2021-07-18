import * as R from 'ramda';
import React from 'react';
import { useTranslation } from 'next-i18next';

import Layout from '../layout';
import { CommunityHead } from '~/components';

export { getServerSideProps } from '../utils';

const Page = () => {
  const { t } = useTranslation('page-contact-us');
  const lang = t('incident', {
    returnObjects: true,
  });

  return (
    <>
      <CommunityHead title={lang.title} />
      <Layout {...R.pick(['title', 'subtitle'], lang)}></Layout>
    </>
  );
};

export default Page;
