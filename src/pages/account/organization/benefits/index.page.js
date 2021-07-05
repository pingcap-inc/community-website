import React from 'react';
import { BenefitCards } from '@tidb-community/ui';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { CoreLayout } from '~/layouts';
import Banner from './banner';
import * as Styled from './index.styled';

export async function getServerSideProps({ locale, req }) {
  // this page currently only support locale - zh
  locale = 'zh';

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'page-organization-benefits'])),
    },
  };
}

const Page = () => {
  const { t } = useTranslation('page-organization-benefits');

  return (
    <CoreLayout domain="tidb.io" locale="zh" MainWrapper={Styled.MainWrapper}>
      <Styled.Container>
        <Banner t={t} />
        <BenefitCards benefits={t('benefits', { returnObjects: true })} />
        <Styled.DecoratorLines />
      </Styled.Container>
      <Styled.DecoratorOval />
      <Styled.DecoratorPoints />
    </CoreLayout>
  );
};

export default Page;
