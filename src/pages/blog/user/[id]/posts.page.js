import React, { useEffect, useState } from 'react';

import { getI18nProps } from '~/utils/i18n.utils';
import { api } from '@tidb-community/datasource';
import BlogList from '../../BlogList';
import UserDetailsLayout from './Layout.component';
import { Select, Skeleton } from 'antd';
import { usePrincipal } from '../../blog.hooks';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  const { id, page, size } = ctx.params;
  const [user, blogs] = await Promise.all([api.blog.users.get(id), api.blog.users.getPosts(id, { page, size })]);

  return {
    props: {
      ...i18nProps,
      id,
      blogs,
      user,
    },
  };
};

const Posts = ({ id, blogs: ssrBlogs, user }) => {
  const principal = usePrincipal();

  const [blogs, setBlogs] = useState(ssrBlogs);
  const [status, setStatus] = useState('PUBLISHED');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.blog.users
      .getPosts(id, { status })
      .then((blogs) => {
        setBlogs(blogs);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, status]);

  return (
    <UserDetailsLayout userDetails={user} item="专栏" itemKey="posts">
      {principal.id === Number(id) ? (
        <Select value={status} options={statuses} onChange={(status) => setStatus(status)} bordered={false} />
      ) : undefined}

      {loading ? <Skeleton active /> : <BlogList blogs={blogs} />}
    </UserDetailsLayout>
  );
};

const statuses = [
  {
    label: '已发布',
    value: 'PUBLISHED',
  },
  {
    label: '草稿',
    value: 'DRAFT',
  },
  {
    label: '审核中',
    value: 'PENDING',
  },
  {
    label: '审核未通过',
    value: 'REJECTED',
  },
];

export default Posts;
