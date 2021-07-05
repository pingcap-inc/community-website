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

const Page = () => {
  const { login, isAnonymous } = useContext(AuthContext);
  const { meData } = useContext(MeContext);
  const { t } = useTranslation('page-orgs');

  const lang = t('settings', { returnObjects: true });

  if (isAnonymous) {
    login();
    return null;
  }

  if (!meData) {
    return <PageLoader />;
  }

  return (
    <>
      <CommunityHead title={lang.title} />

      <Layout>
        <Styled.Container>
          <Styled.Title>{lang.title}</Styled.Title>
          <Form />
        </Styled.Container>
      </Layout>
    </>
  );
};

export default Page;
