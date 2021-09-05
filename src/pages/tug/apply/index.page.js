import React from 'react';
import ApplyMainPage from './ApplyMain.page';
import Error from '../../_error.page';

const Apply = () => {
  const isTugMember = false;
  const isLogin = true;
  if (isLogin) {
    if (isTugMember) {
      return <Error statusCode={409} errorMsg={'已经提交过申请并且正在审核中，或者已经加入 TUG 了'} />;
    } else {
      return <ApplyMainPage />;
    }
  } else {
    //  TODO: push to login page
  }
};

export default Apply;
