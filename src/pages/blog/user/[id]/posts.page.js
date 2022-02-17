import React, { useEffect, useState } from 'react';

import { getI18nProps } from '~/utils/i18n.utils';
import { api } from '@tidb-community/datasource';
import BlogList from '../../_components/BlogList';
import UserDetailsLayout from './Layout.component';
import { Select, Skeleton } from 'antd';
import { usePrincipal } from '../../blog.hooks';
import { getPageQuery } from '~/utils/pagination.utils';
import { useRouter } from 'next/router';
import { blogUrl } from '~/pages/u/[username]/constant.data';
import EmptyStatus from '~/components/EmptyStatus';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  const { page, size } = getPageQuery(ctx.query);
  const { id } = ctx.params;
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
  const { hasAuthority, id: logonUserId } = usePrincipal();

  const statuses = [
    {
      label: '全部',
      value: '',
    },
  ];

  const showFilter = logonUserId === Number(id) || hasAuthority('READ_OTHERS_POST');

  if (showFilter) {
    statuses.push(
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
      }
    );
  }

  const [blogs, setBlogs] = useState(ssrBlogs);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { page, size } = getPageQuery(router.query);

  useEffect(() => {
    setLoading(true);
    api.blog.users
      .getPosts(id, { status, page, size })
      .then((blogs) => {
        setBlogs(blogs);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, status, page, size]);

  const onChangeFilter = (status) => {
    setStatus(status);
  };

  const tabExtendDOM = showFilter ? (
    <Select style={{ width: '8rem' }} value={status} options={statuses} onChange={onChangeFilter} />
  ) : undefined;

  const isShowStatusBadge = status === '' && showFilter;

  let emptyDescription = '你还没有发表过任何文章';
  switch (status) {
    case 'DRAFT':
      emptyDescription = '你没有草稿状态的文章';
      break;
    case 'PENDING':
      emptyDescription = '你没有审核中的文章';
      break;
    case 'REJECTED':
      emptyDescription = '你没有审核未通过的文章';
      break;
  }

  return (
    <UserDetailsLayout userDetails={user} item="专栏" itemKey="posts" tabExtend={tabExtendDOM}>
      {loading ? (
        <Skeleton active />
      ) : blogs.page.totalElements === 0 ? (
        <EmptyStatus description={emptyDescription} style={{ boxShadow: 'none' }}>
          快前往 <a href={blogUrl}>【社区专栏】</a> 撰写第一篇技术文章吧～
        </EmptyStatus>
      ) : (
        <BlogList blogs={blogs} showStatusBadge={isShowStatusBadge} />
      )}
    </UserDetailsLayout>
  );
};

export default Posts;
