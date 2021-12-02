import React from 'react';
import * as Styled from './index.styled';
import { BlogInfo } from '@tidb-community/ui';
import { useRouter } from 'next/router';
import { List, Pagination, Skeleton } from 'antd';
import { useRouterPage } from '~/utils/pagination.utils';

const BlogList = ({
  blogs: {
    content,
    page: { number, totalElements },
  },
  usernameExtends,
  bottomExtends,
}) => {
  const router = useRouter();
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
          renderItem={(value) => {
            const onClick = () => router.push(`/blog/${value.id}`);
            const onClickAuthor = () => router.push(`/blog/user/${value.author.id}`);
            const onClickCategory = () => router.push(`/blog/category/${value.category.slug}`);
            const onClickTag = (tag) => router.push(`/blog/tag/${tag.slug}`);
            return (
              <Styled.Item key={value.id}>
                <BlogInfo
                  {...value}
                  usernameExtends={usernameExtends}
                  bottomExtends={bottomExtends}
                  onClick={onClick}
                  onClickAuthor={onClickAuthor}
                  onClickCategory={onClickCategory}
                  onClickTag={onClickTag}
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
