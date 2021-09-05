import React, { useContext } from 'react';

import ApplyMainPage from './ApplyMain.page';
import Error from '../../_error.page';
import { AuthContext } from '~/context';

const Apply = () => {
  const { login, isAnonymous } = useContext(AuthContext);
  const isTugMember = false;
  if (isAnonymous) {
    if (isTugMember) {
      return <Error statusCode={409} errorMsg={'已经提交过申请并且正在审核中，或者已经加入 TUG 了'} />;
    } else {
      return <ApplyMainPage />;
    }
  } else {
    login();
    return null;
  }
};

export default Apply;
