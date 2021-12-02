import React from 'react';
import { Avatar, List } from 'antd';
import Link from 'next/link';

import { getI18nProps } from '~/utils/i18n.utils';
import UserDetailsLayout from './Layout.component';
import { api } from '@tidb-community/datasource';
import { useRouterPage } from '~/utils/pagination.utils';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  const { id, page, size } = ctx.params;
  const [user, comments] = await Promise.all([api.blog.users.get(id), api.blog.users.getComments(id, { page, size })]);

  return {
    props: {
      ...i18nProps,
      id,
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

  return (
    <List
      pagination={{ current: number, total: totalElements, onChange: onPageChange }}
      dataSource={content}
      renderItem={({ post, content, commenter, repliedTo }) => (
        <li>
          <List.Item>
            <p>
              <Avatar src={commenter.avatarURL} size="small" />
              &nbsp;
              {commenter.username || commenter.name}
              &nbsp; 在
              <Link href={`/blog/${post.id}`}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="ant-btn-link" type="link">
                  「{post.title}」
                </a>
              </Link>
              &nbsp;
              {repliedTo ? <>回复了&nbsp;@{repliedTo.username || repliedTo.name}</> : '评论了'}：{content}
            </p>
          </List.Item>
        </li>
      )}
    />
  );
};

export default CommentsPage;
