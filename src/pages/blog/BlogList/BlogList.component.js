import React from 'react';
import * as Styled from './index.styled';
import BlogInfo from '../components/blogInfo';
import { List, Skeleton } from 'antd';
import { useRouterPage } from '~/utils/pagination.utils';

const BlogList = ({
  blogs: {
    content,
    page: { number, totalElements },
  },
  usernameExtends,
  bottomExtends,
  emptyText = '暂无文章',
  getPostUrl,
}) => {
  const { onPageChange } = useRouterPage();

  if (!content) {
    return <Skeleton active />;
  }

  return (
    <Styled.Container>
      <Styled.List>
        <List
          pagination={{ current: number, total: totalElements, onChange: onPageChange }}
          dataSource={content}
          locale={{ emptyText }}
          renderItem={(value) => {
            return (
              <Styled.Item key={value.id}>
                <BlogInfo
                  {...value}
                  getPostUrl={getPostUrl}
                  usernameExtends={usernameExtends}
                  bottomExtends={bottomExtends}
                />
              </Styled.Item>
            );
          }}
        />
      </Styled.List>
    </Styled.Container>
  );
};

export default BlogList;
