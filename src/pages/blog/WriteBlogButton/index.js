import * as React from 'react';
import { useRouter } from 'next/router';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import { link as linkUtils } from '~/utils';

const WriteBlogButton = () => {
  const router = useRouter();
  const handleClickWrite = (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, '/blog/new/edit');
  };
  return (
    <Button icon={<EditOutlined />} onClick={handleClickWrite} type="primary" block>
      写博客
    </Button>
  );
};

export default WriteBlogButton;
