import React from 'react';

import { CommunityHead } from '~/components';

import Layout from './layout';
import PrivateMessages from './PrivateMessages.component';
import { usePrivateMessages } from './hooks';

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
