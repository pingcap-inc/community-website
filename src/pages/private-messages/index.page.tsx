// @ts-ignore
import Layout from './layout';
import PrivateMessages from './PrivateMessages.component';
import { usePrivateMessages } from '~/pages/private-messages/hooks';
import { getI18nProps } from '~/utils/i18n.utils';
import { GetServerSideProps } from 'next';
import React from 'react';
import { CommunityHead } from '~/components';

export const getServerSideProps: GetServerSideProps = async (context) => {
  //@ts-ignore
  const i18nProps = await getI18nProps(['common'])(context);

  return {
    props: {
      ...i18nProps,
    },
  };
};

export default function Page() {
  const messages = usePrivateMessages(false);
  return (
    <>
      <CommunityHead title={'私信'} />
      <PrivateMessages messages={messages} />
    </>
  );
}

Page.Layout = Layout;
