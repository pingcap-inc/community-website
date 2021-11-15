import React from 'react';
import * as Styled from './index.styled';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

import { CommunityHead } from '~/components';
import { PageDataContext } from '~/context';

import CategoryList from './CategoryList';
import { link as linkUtils } from '~/utils';
import HotTagList from './HotTagList';
import CategoryListMobile from './CategoryListMobile';
import OrderBySwitch from './OrderBySwitch';
import BlogList from './BlogList';
import BlogLayout from '../BlogLayout.component';
import SearchOnMobile from './SearchOnMobile';

const classifications = [
  { name: '全部分类', url: 'blog', selected: true },
  { name: '原理解读', url: 'blog' },
];

const hotTags = [
  { name: '全部分类', url: 'blog' },
  { name: '原理解读', url: 'blog' },
  { name: '新手区', url: 'blog', selected: true },
  { name: '性能调油', url: 'blog' },
  { name: '部署监控', url: 'blog' },
  { name: '新手区成长', url: 'blog' },
];

const BlogHomePage = () => {
  const router = useRouter();
  const handleClickWrite = (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, '/blog/new/edit');
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
              <CategoryList classifications={classifications} />
            </Styled.Start>
            <Styled.Center>
              <CategoryListMobile classifications={classifications} />
              <SearchOnMobile />
              <OrderBySwitch />
              <BlogList />
            </Styled.Center>
            <Styled.End>
              <Styled.WriteBlog>
                <Button icon={<EditOutlined />} onClick={handleClickWrite} type="primary" block>
                  写博客
                </Button>
              </Styled.WriteBlog>
              <HotTagList hotTags={hotTags} />
            </Styled.End>
          </Styled.Container>
        </Styled.Content>
      </BlogLayout>
    </PageDataContext.Provider>
  );
};

export default BlogHomePage;
