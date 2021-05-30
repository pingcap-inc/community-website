import React, { useContext } from 'react';

import Form from './form';
import Layout from '~/pages/users/layout';
import PageLoader from '~/components/pageLoader';
import { AuthContext, MeContext } from 'context';
import { CommunityHead } from '~/components/head';

const pageTitle = '公司信息';

const Profile = () => {
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
      <Layout title="个人信息">
        <Form />
      </Layout>
    </>
  );
};

export default Profile;
