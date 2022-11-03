import React from 'react';

import { CommunityHead } from '~/components';

import Form from './form';
import Layout from '../layout';

const PageContent = ({ title }) => {
  return (
    <Layout title={title}>
      <Form />
    </Layout>
  );
};

const Page = () => {
  const title = '个人信息';

  return (
    <>
      <CommunityHead title={title} />
      <PageContent title={title} />
    </>
  );
};

export default Page;
