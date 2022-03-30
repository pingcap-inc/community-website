import React from 'react';
import * as Styled from './index.styled';
// import BlogInfo from '../blogInfo';
import PostItem from '~/pages/blog/_components/PostItem';
import { List, Skeleton } from 'antd';
import { useRouterPage } from '~/utils/pagination.utils';
import BlogStatusBadge from '~/pages/blog/_components/BlogStatusBadge/BlogStatusBadge';

const BlogList = ({
  blogs: {
    content,
    page: { number, totalElements },
  },
  // usernameExtends,
  // bottomExtends,
  // emptyText = '暂无文章',
  getPostUrl,
  actionText,
  showStatusBadge = false,
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
          // locale={{ emptyText }}
          renderItem={(value) => {
            return (
              <Styled.Item>
                {/*<BlogInfo*/}
                {/*  {...value}*/}
                {/*  getPostUrl={getPostUrl}*/}
                {/*  usernameExtends={usernameExtends}*/}
                {/*  bottomExtends={bottomExtends}*/}
                {/*  actionText={actionText}*/}
                {/*/>*/}
                <PostItem
                  actionText={actionText}
                  blogInfo={value}
                  statusBadge={showStatusBadge && value ? <BlogStatusBadge status={value.status} /> : undefined}
                  getUrlBySlugCallback={getPostUrl}
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
