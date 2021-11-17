import React from 'react';
import * as Styled from './index.styled';
import { BlogInfo } from '@tidb-community/ui';

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

const BlogList = () => {
  return (
    <Styled.Container>
      <Styled.List>
        {[1, 2, 3, 4, 5, 6].map((key) => (
          <Styled.Item>
            <BlogInfo key={key} {...blogInfo} />
          </Styled.Item>
        ))}
      </Styled.List>
    </Styled.Container>
  );
};

export default BlogList;
