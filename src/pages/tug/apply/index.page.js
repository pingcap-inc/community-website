import React, { useContext } from 'react';

import { AuthContext } from '~/context';
import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';

import Apply from './Apply.component';
import { title, description } from './apply.data';

const PageContent = () => {
  const { isAnonymous, login } = useContext(AuthContext);

  if (isAnonymous) {
    login();
    return null;
  }

  return <Apply />;
};

const Page = () => (
  <CoreLayout>
    <CommunityHead title={title} description={description} />
    <PageContent />
  </CoreLayout>
);

export default Page;
