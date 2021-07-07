import React from 'react';

import * as Styled from './invitations.styled';
import Invitations from './Invitations.component';
import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';
import { getI18nProps } from '~/utils/i18n.utils';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  return {
    props: {
      ...i18nProps,
    },
  };
};

const Page = () => (
  <CoreLayout domain="tidb.io" MainWrapper={Styled.MainWrapper}>
    <CommunityHead title="团队邀请" />
    <Invitations />
  </CoreLayout>
);

export default Page;
