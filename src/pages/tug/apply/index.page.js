import React, { useContext } from 'react';

import Apply from './Apply.component';
import Error from '../../_error.page';
import { AuthContext } from '~/context';
import { CommunityHead } from '~/components';

const PageContent = () => {
  const { isAnonymous } = useContext(AuthContext);

  const isTugMember = false;
  if (!isAnonymous) {
    // login();
    // return null;
  }

  if (isTugMember) {
    return <Error statusCode={409} errorMsg={'已经提交过申请并且正在审核中，或者已经加入 TUG 了'} />;
  } else {
    return <Apply />;
  }
};

const title = 'TiDB User Group 会员申请';
const description =
  '加入 TUG，让数据库、大数据从业者找到自己的圈子；' +
  '探索技术问题，随时随地交流成长，解决问题；发表技术见解，收获前沿知识，提升个人影响力。';

const Page = () => (
  <>
    <CommunityHead title={title} description={description} />
    <PageContent />
  </>
);

export default Page;
