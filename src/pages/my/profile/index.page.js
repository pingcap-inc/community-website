import React, { useContext } from 'react';

import { CommunityHead, PageLoader } from '~/components';
import { AuthContext, MeContext } from '~/context';

import Form from './form';
import Layout from '~/pages/my/layout';

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
