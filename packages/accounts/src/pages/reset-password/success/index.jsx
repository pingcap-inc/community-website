import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { FullWidthButton } from '~/components/form';
import { SimpleLayout } from '~/layout';

const Page = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <FullWidthButton type="primary" onClick={() => history.push(`/login${location.search}`)}>
      返回登录
    </FullWidthButton>
  );
};

Page.Layout = SimpleLayout;
Page.layoutProps = {
  title: '密码重置成功',
  subtitle: '',
};
Page.headTitle = '重置密码 | PingCAP Account';

export default Page;
