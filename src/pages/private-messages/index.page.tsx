// @ts-ignore
import Layout from './layout';
import { ReactElement, useState } from 'react';
import PrivateMessages from './PrivateMessages.component';
import { useRouter } from 'next/router';

export default function Page() {
  return <PrivateMessages />;
}

Page.Layout = Layout;
