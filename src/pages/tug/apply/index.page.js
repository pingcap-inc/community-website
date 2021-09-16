import React, { useContext } from 'react';

import Apply from './Apply.component';
import { title, description } from './Apply.data';
// import Error from '~/pages/_error.page';
import { AuthContext } from '~/context';
import { CommunityHead } from '~/components';

const PageContent = () => {
  const { isAnonymous, login } = useContext(AuthContext);

  if (isAnonymous) {
    login();
    return null;
  }

  return <Apply />;
};

const Page = () => (
  <>
    <CommunityHead title={title} description={description} />
    <PageContent />
  </>
);

export default Page;
