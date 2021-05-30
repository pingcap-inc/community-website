import React, { useContext } from 'react';
import useSWR from 'swr';
import { Skeleton } from 'antd';

import Form from './form';
import Layout from '~/pages/users/layout';
import PageLoader from '~/components/pageLoader';
import { AuthContext, MeContext } from 'context';
import { CommunityHead } from '~/components/head';

const pageTitle = '公司信息';

const Profile = () => {
  const { data, error } = useSWR('profile');
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

  const isLoading = !error && !data;

  return (
    <>
      <CommunityHead title={pageTitle} />
      <Layout title="个人信息">{isLoading ? <Skeleton /> : <Form data={data?.data} />}</Layout>
    </>
  );
};

export default Profile;
