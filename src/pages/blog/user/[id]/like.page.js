import React from 'react';

import { getI18nProps } from '~/utils/i18n.utils';
import { api } from '@tidb-community/datasource';
import BlogList from '../../_components/BlogList';
import UserDetailsLayout from './Layout.component';
import { getPageQuery } from '~/utils/pagination.utils';
import EmptyStatus from '~/components/EmptyStatus';
import { blogUrl } from '~/pages/u/[username]/constant.data';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  const { page, size } = getPageQuery(ctx.query);
  const { id: userId } = ctx.params;
  const [user, blogs] = await Promise.all([api.blog.users.get({ userId }), api.blog.users.getLikes({ userId, page, size })]);

  blogs.content = blogs.content.map(({ post }) => post);

  return {
    props: {
      ...i18nProps,
      userId,
      user,
      blogs,
    },
  };
};

const Like = ({ blogs, user }) => {
  return (
    <UserDetailsLayout userDetails={user} item="赞" itemKey="like">
      {blogs.page.totalElements === 0 ? (
        <EmptyStatus description={'你还没有点赞过任何文章'} style={{ boxShadow: 'none' }}>
          快前往 <a href={blogUrl}>【社区专栏】</a> 点赞第一篇技术文章吧～
        </EmptyStatus>
      ) : (
        <BlogList blogs={blogs} actionText="喜欢了文章" />
      )}
    </UserDetailsLayout>
  );
};

export default Like;
