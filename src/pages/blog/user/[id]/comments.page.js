import React from 'react';
import * as Styled from './index.styled';
import { List } from 'antd';
// import Link from 'next/link';

import { getI18nProps } from '~/utils/i18n.utils';
import UserDetailsLayout from './Layout.component';
import { api } from '@tidb-community/datasource';
import { useRouterPage } from '~/utils/pagination.utils';
import { getPageQuery } from '~/utils/pagination.utils';
import CommentPostItem from '~/pages/blog/user/_component/CommentPostItem';
import EmptyStatus from '~/components/EmptyStatus';
import { blogUrl } from '~/pages/u/[username]/constant.data';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  const { page, size } = getPageQuery(ctx.query);
  const { id: userId } = ctx.params;
  const [user, comments] = await Promise.all([api.blog.users.get({ userId }), api.blog.users.getComments({ userId, page, size })]);

  return {
    props: {
      ...i18nProps,
      comments,
      user,
    },
  };
};

const CommentsPage = ({ user, comments }) => {
  return (
    <UserDetailsLayout userDetails={user} item="评论" itemKey="comments">
      <CommentsList comments={comments} />
    </UserDetailsLayout>
  );
};

const CommentsList = ({
  comments: {
    content,
    page: { number, totalElements },
  },
}) => {
  const { onPageChange } = useRouterPage();

  return content.length === 0 ? (
    <EmptyStatus description={'你还没有评论过任何文章'} style={{ boxShadow: 'none' }}>
      快前往 <a href={blogUrl}>【社区专栏】</a> 评论第一篇技术文章吧～
    </EmptyStatus>
  ) : (
    <List
      pagination={{ current: number, total: totalElements, onChange: onPageChange }}
      dataSource={content}
      // locale={{ emptyText: '暂无评论' }}
      renderItem={({ post, content }) => (
        <Styled.Item>
          <CommentPostItem blogInfo={post} commentContent={content} />
        </Styled.Item>
      )}
    />
  );
};

export default CommentsPage;
