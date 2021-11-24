import React from 'react';

import { getI18nProps } from '~/utils/i18n.utils';
import { api } from '@tidb-community/datasource';
import BlogList from '../../BlogList';
import UserDetailsLayout from './Layout.component';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  const { id } = ctx.params;

  const [user, blogs] = await Promise.all([api.blog.users.get(id), api.blog.users.getPosts(id)]);

  return {
    props: {
      ...i18nProps,
      id,
      blogs,
      user,
    },
  };
};

const Posts = ({ id, blogs, user }) => {
  return (
    <UserDetailsLayout userDetails={user} item="博客" itemKey="posts">
      <BlogList blogs={blogs} />
    </UserDetailsLayout>
  );
};

export default Posts;
