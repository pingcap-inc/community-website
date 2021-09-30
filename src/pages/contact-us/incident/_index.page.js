import * as R from 'ramda';
import React from 'react';
import { useTranslation } from 'next-i18next';

import From from './form';
import Layout from '../layout';
import { CommunityHead } from '~/components';

export { getServerSideProps } from '../utils';

// FIXME: The incident report form was marked as unvisible in CP-225
// If we'd like to revert it back, we can rename _index.page.js to index.page.js
const Page = () => {
  const { t } = useTranslation('page-contact-us');
  const lang = t('incident', {
    returnObjects: true,
  });

  return (
    <>
      <CommunityHead title={lang.title} />
      <Layout {...R.pick(['title', 'subtitle'], lang)}>
        <From />
      </Layout>
    </>
  );
};

export default Page;
