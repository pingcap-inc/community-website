import React, { useContext } from 'react';

import { CommunityHead, PageLoader } from '~/components';
import { AuthContext, MeContext } from '~/context';

import Content from './content';
import Layout from '../layout';

const PageContent = ({ title }) => {
  const { login, isAnonymous } = useContext(AuthContext);
  const { meData } = useContext(MeContext);

  if (isAnonymous) {
    login();
    return null;
  }

  if (!meData) {
    return <PageLoader />;
  }

  return (
    <Layout title={title}>
      <Content />
    </Layout>
  );
};

const Page = () => {
  const title = '账号设置';

  return (
    <>
      <CommunityHead title={title} />
      <PageContent title={title} />
    </>
  );
};

export default Page;
