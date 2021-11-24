import React from 'react';
import * as Styled from './index.styled';
import { Breadcrumb } from 'antd';
import Link from 'next/link';

import { getI18nProps } from '~/utils/i18n.utils';
import { CommunityHead } from '~/components';
import { PageDataContext } from '~/context';

import BlogLayout from '../../BlogLayout.component';
import Tab from '../Tab';
import { api } from '@tidb-community/datasource';
import BlogList from '../../BlogList';
import UserDetailsLayout from './Layout.component';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  const { id } = ctx.params;
  const [user, blogs] = await Promise.all([api.blog.users.get(id), api.blog.users.getLikes(id)]);

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
      <BlogList blogs={blogs} usernameExtends="喜欢了" />
    </UserDetailsLayout>
  );
};

export default Like;
