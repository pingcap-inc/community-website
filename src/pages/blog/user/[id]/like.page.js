import React from 'react';

import { getI18nProps } from '~/utils/i18n.utils';
import { api } from '@tidb-community/datasource';
import BlogList from '../../_components/BlogList';
import UserDetailsLayout from './Layout.component';
import { getPageQuery } from '../../../../utils/pagination.utils';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  const { page, size } = getPageQuery(ctx.query);
  const { id } = ctx.params;
  const [user, blogs] = await Promise.all([api.blog.users.get(id), api.blog.users.getLikes(id, { page, size })]);

  blogs.content = blogs.content.map(({ post }) => post);

  return {
    props: {
      ...i18nProps,
      id,
      user,
      blogs,
    },
  };
};

const Like = ({ id, blogs, user }) => {
  return (
    <UserDetailsLayout userDetails={user} item="赞" itemKey="like">
      <BlogList blogs={blogs} usernameExtends="喜欢了" emptyText="暂无点赞" />
    </UserDetailsLayout>
  );
};

export default Like;
