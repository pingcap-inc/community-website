import React, { useContext } from 'react';

import * as Styled from './settings.styled';
import Layout from '~/pages/orgs/layout';
import { AuthContext, MeContext } from '~/context';
import { CommunityHead, PageLoader } from '~/components';
import { getI18nProps } from '~/utils/i18n.utils';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common', 'page-orgs'])(ctx);

  return {
    props: {
      ...i18nProps,
    },
  };
};

const Page = () => {
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
    <>
      <CommunityHead title="企业信息" />

      <Layout>
        <Styled.Container>Settings</Styled.Container>
      </Layout>
    </>
  );
};

export default Page;
