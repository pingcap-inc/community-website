import React from 'react';

import Layout from '~/pages/users/layout';
import { CommunityHead } from '~/components/head';

const pageTitle = '账号设置';

const Settings = () => (
  <>
    <CommunityHead title={pageTitle} />

    <Layout title="账号设置"></Layout>
  </>
);

export default Settings;
