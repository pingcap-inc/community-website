// @ts-ignore
import Layout from './layout';
import PrivateMessages from './PrivateMessages.component';
import { usePrivateMessages } from '~/pages/private-messages/hooks';
import React from 'react';
import Head from '~/components/head/Head.component';

export default function Page() {
  const messages = usePrivateMessages(false);
  const seoMetadata = {
    title: '私信',
  };
  return (
    <>
      <Head {...seoMetadata} />
      <PrivateMessages messages={messages} />
    </>
  );
}

Page.Layout = Layout;
