import React from 'react';

import { CommunityHead } from '~/components';

import Content from './content';
import Layout from '../layout';

const Page = () => {
  const title = '账号设置';

  return (
    <>
      <CommunityHead title={title} />

      <Layout title={title}>
        <Content />
      </Layout>
    </>
  );
};

export default Page;
