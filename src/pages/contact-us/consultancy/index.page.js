import * as R from 'ramda';
import React from 'react';
import { useTranslation } from 'next-i18next';

import Form from './form';
import Layout from '../layout';
import { CommunityHead } from '~/components';

export { getServerSideProps } from '../utils';

const Page = () => {
  const { t } = useTranslation('page-contact-us');
  const lang = t('consultancy', {
    returnObjects: true,
  });

  return (
    <>
      <CommunityHead title={lang.title} />
      <Layout {...R.pick(['title', 'subtitle'], lang)}>
        <Form />
      </Layout>
    </>
  );
};

export default Page;
