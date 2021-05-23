import React from 'react';
import { useHistory } from 'react-router-dom';

import { SimpleLayout } from '../../../layout';
import { FullWidthButton } from '../../../components/form';

const Page = () => {
  const history = useHistory();

  return (
    <FullWidthButton type="primary" onClick={() => history.push('/login')}>
      返回登录
    </FullWidthButton>
  );
};

Page.Layout = SimpleLayout;
Page.layoutProps = {
  title: '密码重置成功',
  subtitle: '',
};

export default Page;
