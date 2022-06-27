import React, { useContext, useEffect } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { api } from '@tidb-community/datasource';

import * as Styled from './company.styled';
import Form from './form';
import Layout from '~/pages/my/layout';
import { AuthContext, MeContext } from '~/context';
import { CommunityHead } from '~/components';
import { PageLoader } from '~/components';
import { getI18nProps } from '~/utils/i18n.utils';
import { redDots as redDotsUtils } from '~/utils';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  return {
    props: {
      ...i18nProps,
    },
  };
};

const PageContent = ({ title }) => {
  const { login, isAnonymous, isLoggedIn } = useContext(AuthContext);
  const { data: redDotsResp } = useSWR(isLoggedIn && 'operation.fetchRedDots');
  const { meData } = useContext(MeContext);
  const { mutate } = useSWRConfig();

  const redDots = redDotsUtils.transformRespToMap(redDotsResp);

  useEffect(() => {
    (async () => {
      if (redDots.companyInfo) {
        await api.operation.setRedDotRead('company-info');
        mutate('operation.fetchRedDots');
      }
    })();
  }, [redDots.companyInfo, mutate]);

  if (isAnonymous) {
    login();
    return null;
  }

  if (!meData) {
    return <PageLoader />;
  }

  return (
    <Layout title={title}>
      {redDots.joinOrg && <Styled.Alert type="info" showIcon message={<>完成公司信息填写可 +20 积分</>} />}
      <Form />
    </Layout>
  );
};

const Page = () => {
  const title = '公司信息';

  return (
    <>
      <CommunityHead title={title} />
      <PageContent title={title} />
    </>
  );
};

export default Page;
