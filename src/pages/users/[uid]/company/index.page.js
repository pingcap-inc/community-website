import Link from 'next/link';
import React, { useContext } from 'react';

import * as Styled from './company.styled';
import Form from './form';
import Layout from '~/pages/users/layout';
import PageLoader from '~/components/pageLoader';
import { AuthContext, MeContext } from 'context';

const Company = () => {
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
    <Layout title="公司信息">
      <Styled.Alert
        type="info"
        showIcon
        message={
          <>
            完成公司信息填写可 +20 积分，完成认证可以获得 +200 经验值，+200 积分
            <Link href="/account/organization/new">点击完成认证</Link>
          </>
        }
      />
      <Form />
    </Layout>
  );
};

export default Company;
