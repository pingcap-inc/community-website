import React from 'react';

import { getI18nProps } from '~/utils/i18n.utils';
import { api } from '@tidb-community/datasource';
import BlogList from '../../BlogList';
import UserDetailsLayout from './Layout.component';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  const { id, page, size } = ctx.params;
  const [user, blogs] = await Promise.all([api.blog.users.get(id), api.blog.users.getFavorites(id, { page, size })]);

  blogs.content = blogs.content.map(({ post }) => post);
  return {
    props: {
      ...i18nProps,
      id,
      blogs,
      user,
    },
  };
};

const Favorites = ({ id, blogs, user }) => {
  return (
    <UserDetailsLayout userDetails={user} item="收藏" itemKey="favorites">
      <BlogList blogs={blogs} usernameExtends="收藏了" />
    </UserDetailsLayout>
  );
};

export default Favorites;
