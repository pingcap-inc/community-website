import React from 'react';

import CreateOrganization from './content.component';
import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';

const Page = () => (
  <CoreLayout domain="tidb.io">
    <CommunityHead title="团队认证" />
    <CreateOrganization />
  </CoreLayout>
);

export default Page;
