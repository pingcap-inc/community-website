import React, { useEffect } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { api } from '@tidb-community/datasource';
import { CommunityHead } from '~/components';
import { redDots as redDotsUtils } from '~/utils';

import * as Styled from './company.styled';
import Form from './form';
import Layout from '../layout';
import Verification from '../company/Verification.component';
import { Space } from 'antd';
import { useIsLoggedIn } from '~/hooks/account';

const PageContent = ({ title }) => {
  const isLoggedIn = useIsLoggedIn();
  const { data: redDotsResp } = useSWR(isLoggedIn && 'operation.fetchRedDots');
  const { mutate } = useSWRConfig();

  const redDots = redDotsUtils.transformRespToMap(redDotsResp);

  useEffect(() => {
    (async () => {
      if (redDots.companyInfo) {
        await api.operation.setRedDotRead('company-info');
        await mutate('operation.fetchRedDots');
      }
    })();
  }, [redDots.companyInfo, mutate]);

  const titleNode = (
    <Space>
      <div>{title}</div>
      <Styled.TitleBadge>非公开</Styled.TitleBadge>
    </Space>
  );

  return (
    <Layout title={titleNode}>
      {redDots.companyInfo && <Styled.Alert type="info" showIcon message={<>完成公司信息填写可 +20 积分</>} />}
      <Form />
      <Verification />
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
