import React from 'react';
import { useTranslation } from 'next-i18next';

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
      <Layout>{lang.title}</Layout>
    </>
  );
};

export default Page;
