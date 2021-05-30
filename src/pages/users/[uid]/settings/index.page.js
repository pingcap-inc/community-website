import React, { useContext } from 'react';

import Content from './content';
import Layout from '~/pages/users/layout';
import PageLoader from '~/components/pageLoader';
import { AuthContext, MeContext } from 'context';
import { CommunityHead } from '~/components/head';

const pageTitle = '账号设置';

const Settings = () => {
  const { meData, isMeValidating } = useContext(MeContext);
  const { login } = useContext(AuthContext);

  if (!meData) {
    if (isMeValidating) {
      return <PageLoader />;
    } else {
      login();
      return null;
    }
  }

  return (
    <>
      <CommunityHead title={pageTitle} />

      <Layout title="账号设置">
        <Content />
      </Layout>
    </>
  );
};

export default Settings;
