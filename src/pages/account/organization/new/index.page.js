import React, { useEffect } from 'react';
import { api } from '@tidb-community/datasource';
import { mutate } from 'swr';

import CreateOrganization from './content.component';
import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';

const Page = () => {
  useEffect(() => {
    (async () => {
      await api.operation.setRedDotRead('org-enroll');
      mutate('operation.fetchRedDots');
    })();
  }, []);

  return (
    <CoreLayout domain="tidb.io">
      <CommunityHead title="团队认证" />
      <CreateOrganization />
    </CoreLayout>
  );
};

export default Page;
