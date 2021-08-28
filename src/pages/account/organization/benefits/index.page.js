import React from 'react';
import { BenefitCards } from '@tidb-community/ui';
import { useTranslation } from 'next-i18next';

import * as Styled from './index.styled';
import Banner from './banner';
import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';
import { getI18nProps } from '~/utils/i18n.utils';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common', 'page-organization-benefits'])(ctx);

  return {
    props: {
      ...i18nProps,
    },
  };
};

const Page = () => {
  const { t } = useTranslation('page-organization-benefits');

  return (
    <CoreLayout domain="tidb.io" locale="zh" MainWrapper={Styled.MainWrapper}>
      <CommunityHead {...t('head', { returnObjects: true })} />
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
