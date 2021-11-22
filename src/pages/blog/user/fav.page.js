import React from 'react';
import * as Styled from './index.styled';
import { Breadcrumb } from 'antd';
import Link from 'next/link';
import { BlogInfo } from '@tidb-community/ui';

import { CommunityHead } from '~/components';
import { PageDataContext } from '~/context';

import BlogLayout from '../BlogLayout.component';
import Tab from './Tab';

const blogInfo = {
  id: 10086,
  author: {
    id: 10010,
    avatarUrl: 'https://cdn.fakercloud.com/avatars/bassamology_128.jpg',
    username: 'Username',
  },
  publishedAt: '22 分钟前',
  title: '从一个简单的Delete删数据场景谈TiDB数据库开发规范的重要性',
  category: { id: 1, name: '技术文章' },
  tags: [
    { id: 1, name: '故障案例' },
    { id: 2, name: '安装部署' },
    { id: 3, name: 'TiCDC' },
  ],
  interactions: {
    likes: 30,
    comments: 666,
  },
  coverImageUrl: 'https://fakeimg.pl/1540x440/',
};

const Fav = () => {
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
            <Styled.Breadcrumb>
              <Breadcrumb.Item>博客</Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link href="">我的</Link>
              </Breadcrumb.Item>
            </Styled.Breadcrumb>

            <Tab />

            <Styled.List>
              {[1, 2, 3, 4, 5, 6].map((key) => (
                <Styled.Item>
                  <BlogInfo key={key} {...blogInfo} />
                </Styled.Item>
              ))}
            </Styled.List>
          </Styled.Container>
        </Styled.Content>
      </BlogLayout>
    </PageDataContext.Provider>
  );
};

export default Fav;
