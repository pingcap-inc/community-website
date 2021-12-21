import React from 'react';
import * as Styled from './index.styled';
import BlogInfo from '../components/blogInfo';
import { useRouter } from 'next/router';
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
          locale={{ emptyText }}
          renderItem={(value) => {
            const onClickAuthor = () => router.push(`/blog/user/${value.author.id}`);
            const onClickCategory = () => router.push(`/blog/c/${value.category.slug}`);
            const onClickTag = (tag) => router.push(`/blog/tag/${tag.slug}`);
            return (
              <Styled.Item key={value.id}>
                <BlogInfo
                  {...value}
                  usernameExtends={usernameExtends}
                  bottomExtends={bottomExtends}
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
