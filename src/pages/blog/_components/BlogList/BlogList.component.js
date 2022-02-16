import React from 'react';
import * as Styled from './index.styled';
// import BlogInfo from '../blogInfo';
import { List, Skeleton } from 'antd';
import { useRouterPage } from '~/utils/pagination.utils';
import PostItem from '~/pages/blog/user/_component/PostItem';

const BlogList = ({
  blogs: {
    content,
    page: { number, totalElements },
  },
  // usernameExtends,
  // bottomExtends,
  // emptyText = '暂无文章',
  // getPostUrl,
  actionText,
}) => {
  const { onPageChange } = useRouterPage();
  console.log('!!actionText', actionText);
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
              <Styled.Item key={value.id}>
                {/*<BlogInfo*/}
                {/*  {...value}*/}
                {/*  getPostUrl={getPostUrl}*/}
                {/*  usernameExtends={usernameExtends}*/}
                {/*  bottomExtends={bottomExtends}*/}
                {/*/>*/}
                <PostItem actionText={actionText} blogInfo={value} />
              </Styled.Item>
            );
          }}
        />
      </Styled.List>
    </Styled.Container>
  );
};

export default BlogList;
