import React, { useContext } from 'react';

import Form from './form';
import Layout from '~/pages/users/layout';
import PageLoader from '~/components/pageLoader';
import { AuthContext, MeContext } from 'context';

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
    <Layout title="个人信息">
      <Form />
    </Layout>
  );
};

export default Profile;
