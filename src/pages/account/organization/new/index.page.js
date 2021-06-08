import React, { useEffect } from 'react';
import { api } from '@tidb-community/datasource';

import CreateOrganization from './content.component';
import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';

const Page = () => {
  useEffect(() => {
    api.operation.setRedDotRead('org-enroll');
  }, []);

  return (
    <CoreLayout domain="tidb.io">
      <CommunityHead title="团队认证" />
      <CreateOrganization />
    </CoreLayout>
  );
};

export default Page;
