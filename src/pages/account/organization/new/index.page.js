import React, { useContext, useEffect } from 'react';
import { api } from '@tidb-community/datasource';
import { mutate } from 'swr';

import CreateOrganization from './content.component';
import { AuthContext, MeContext } from '~/context';
import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';
import { PageLoader } from '~/components';

const Page = () => {
  useEffect(() => {
    (async () => {
      await api.operation.setRedDotRead('org-enroll');
      mutate('operation.fetchRedDots');
    })();
  }, []);

  const { login, isAnonymous } = useContext(AuthContext);
  const { meData } = useContext(MeContext);

  if (isAnonymous) {
    login();
    return null;
  }

  if (!meData) {
    return <PageLoader />;
  }

  return (
    <CoreLayout domain="tidb.io">
      <CommunityHead title="团队认证" />
      <CreateOrganization />
    </CoreLayout>
  );
};

export default Page;
