import React from 'react';
import * as Styled from './index.styled';
import { BlogInfo } from '@tidb-community/ui';
import { useRouter } from 'next/router';
import { Pagination } from 'antd';
import { useRouterPage } from '~/utils/pagination.utils';

// import { link as linkUtils } from '~/utils';

const BlogList = ({
  blogs: {
    content,
    page: { number, totalElements },
  },
}) => {
  const router = useRouter();
  const { onPageChange } = useRouterPage();

  return (
    <Styled.Container>
      <Styled.List>
        {content.map((value) => {
          const onClick = () => router.push(`/blog/${value.id}`);
          const onClickAuthor = () => router.push(`/blog/user/${value.author.id}`);
          const onClickCategory = () => router.push(`/blog/category/${value.id}`);
          const onClickTag = (tag) => router.push(`/blog/tag/${tag.slug}`);
          return (
            <Styled.Item>
              <BlogInfo
                key={value.id}
                {...value}
                onClick={onClick}
                onClickAuthor={onClickAuthor}
                onClickCategory={onClickCategory}
                onClickTag={onClickTag}
              />
            </Styled.Item>
          );
        })}
      </Styled.List>
      <Styled.Pagination>
        <Pagination current={number} total={totalElements} onChange={onPageChange} />
      </Styled.Pagination>
    </Styled.Container>
  );
};

export default BlogList;
