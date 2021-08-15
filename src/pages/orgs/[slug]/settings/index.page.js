import React, { useContext } from 'react';
import { useTranslation } from 'next-i18next';

import * as Styled from './settings.styled';
import Form from './form';
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

const PageContent = ({ title }) => {
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
      <Layout>
        <Styled.Container>
          <Styled.Title>{title}</Styled.Title>
          <Form />
        </Styled.Container>
      </Layout>
    </>
  );
};

const Page = () => {
  const { t } = useTranslation('page-orgs');
  const { title } = t('settings', { returnObjects: true });

  return (
    <>
      <CommunityHead title={title} />
      <PageContent title={title} />
    </>
  );
};

export default Page;
