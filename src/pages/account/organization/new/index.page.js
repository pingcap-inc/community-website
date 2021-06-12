import React, { useContext, useEffect } from 'react';
import { api } from '@tidb-community/datasource';
import { mutate } from 'swr';

import CreateOrganization from './content.component';
import { AuthContext, MeContext } from '~/context';
import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';
import { PageLoader } from '~/components';

const Page = () => {
  const { login, isAnonymous, isLoggedIn } = useContext(AuthContext);
  const { meData } = useContext(MeContext);

  useEffect(() => {
    (async () => {
      if (isLoggedIn) {
        await api.operation.setRedDotRead('org-enroll');
        mutate('operation.fetchRedDots');
      }
    })();
  }, [isLoggedIn]);

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
