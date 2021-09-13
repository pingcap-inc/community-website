import React, { useContext } from 'react';

import Apply from './Apply.component';
import { title, description } from './Apply.data';
import Error from '../../_error.page';
import { AuthContext } from '~/context';
import { CommunityHead } from '~/components';

const PageContent = () => {
  const { isAnonymous, login } = useContext(AuthContext);

  const isTugMember = false;
  if (isAnonymous) {
    login();
    return null;
  }

  if (isTugMember) {
    return <Error statusCode={409} errorMsg={'已经提交过申请并且正在审核中，或者已经加入 TUG 了'} />;
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
