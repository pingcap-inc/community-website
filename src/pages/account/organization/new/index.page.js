import React, { useContext, useEffect } from 'react';
import { api } from '@tidb-community/datasource';
import { useSWRConfig } from 'swr';

import CreateOrganization from './content.component';
import { AuthContext, MeContext } from '~/context';
import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';
import { PageLoader } from '~/components';
import { getI18nProps } from '~/utils/i18n.utils';

export const getStaticProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  return {
    props: {
      ...i18nProps,
    },
  };
};

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
    <CoreLayout>
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
