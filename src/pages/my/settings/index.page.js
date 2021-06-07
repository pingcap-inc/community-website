import React, { useContext } from 'react';

import Content from './content';
import Layout from '~/pages/my/layout';
import { AuthContext, MeContext } from '~/context';
import { PageLoader } from '~/components';

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
    <Layout title="账号设置">
      <Content />
    </Layout>
  );
};

export default Settings;
