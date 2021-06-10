import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import useSWR, { mutate } from 'swr';

import * as Styled from './company.styled';
import Form from './form';
import Layout from '~/pages/my/layout';
import { AuthContext, MeContext } from '~/context';
import { PageLoader } from '~/components';
import { api } from '@tidb-community/datasource';
import { redDots as redDotsUtils } from '~/utils';

const Company = () => {
  const { login, isAnonymous, isLoggedIn } = useContext(AuthContext);
  const { meData } = useContext(MeContext);
  const { data: redDotsResp } = useSWR(isLoggedIn && 'operation.fetchRedDots');
  const redDots = redDotsUtils.transformRespToMap(redDotsResp);

  useEffect(() => {
    (async () => {
      if (redDots.companyInfo) {
        await api.operation.setRedDotRead('company-info');
        mutate('operation.fetchRedDots');
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [redDots.companyInfo]);

  if (isAnonymous) {
    login();
    return null;
  }

  if (!meData) {
    return <PageLoader />;
  }

  return (
    <Layout title="公司信息">
      {redDots.joinOrg && (
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
      )}
      <Form />
    </Layout>
  );
};

export default Company;
