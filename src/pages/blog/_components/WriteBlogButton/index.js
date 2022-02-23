import * as React from 'react';
import { useRouter } from 'next/router';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import { link as linkUtils } from '~/utils';
import { usePrincipal } from '~/pages/blog/blog.hooks';
import { useContext } from 'react';
import { AuthContext } from '~/context';

const WriteBlogButton = () => {
  const router = useRouter();
  const { isLogin } = usePrincipal();
  const { login } = useContext(AuthContext);
  const handleClickWrite = (e) => {
    e.preventDefault();
    if (!isLogin) {
      login();
    } else {
      linkUtils.handleRedirect(router, '/blog/new/edit');
    }
  };
  return (
    <Button icon={<EditOutlined />} onClick={handleClickWrite} type="primary" block>
      写文章
    </Button>
  );
};

export default WriteBlogButton;
