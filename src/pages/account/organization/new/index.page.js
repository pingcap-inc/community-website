import React, { useContext, useEffect } from 'react';
import { api } from '@tidb-community/datasource';
import { useSWRConfig } from 'swr';

import CreateOrganization from './content.component';
import { AuthContext, MeContext } from '~/context';
import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';
import { PageLoader } from '~/components';

const PageContent = () => {
  const { login, isAnonymous, isLoggedIn } = useContext(AuthContext);
  const { meData } = useContext(MeContext);
  const { mutate } = useSWRConfig();

  useEffect(() => {
    (async () => {
      if (isLoggedIn) {
        await api.operation.setRedDotRead('org-enroll');
        mutate('operation.fetchRedDots');
      }
    })();
  }, [isLoggedIn, mutate]);

  if (isAnonymous) {
    login();
    return null;
  }

  if (!meData) {
    return <PageLoader />;
  }

  return (
    <CoreLayout domain="tidb.io">
      <CreateOrganization />
    </CoreLayout>
  );
};

const Page = () => (
  <>
    <CommunityHead title="团队认证" />
    <PageContent />
  </>
);

export default Page;
