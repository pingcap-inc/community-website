import React from 'react';
import * as Styled from './index.styled';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

import { CommunityHead } from '~/components';
import { PageDataContext } from '~/context';

import ClassificationList from './ClassificationList';
import { link as linkUtils } from '~/utils';
import HotTagList from './HotTagList';
import OrderBySwitch from './OrderBySwitch';
import BlogList from './BlogList';
import BlogLayout from '../BlogLayout.component';

const BlogHomePage = () => {
  const router = useRouter();
  const handleClickWrite = (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, '/blog');
  };
  return (
    <PageDataContext.Provider value={{}}>
      <CommunityHead
        title="博客"
        // description
        // keyword
      />

      <BlogLayout>
        <Styled.Content>
          <Styled.Container>
            <Styled.Start>
              <ClassificationList />
            </Styled.Start>
            <Styled.Center>
              <OrderBySwitch />
              <BlogList />
            </Styled.Center>
            <Styled.End>
              <Button icon={<EditOutlined />} onClick={handleClickWrite} type="primary" block>
                写博客
              </Button>
              <HotTagList />
            </Styled.End>
          </Styled.Container>
        </Styled.Content>
      </BlogLayout>
    </PageDataContext.Provider>
  );
};

export default BlogHomePage;
