import React from 'react';

import { getI18nProps } from '~/utils/i18n.utils';
import BlogList from '~/pages/blog/_components/BlogList/BlogList.component';
import UserDetailsLayout from '../Layout.component';
import { Skeleton } from 'antd';
import { usePrincipal } from '../../../blog.hooks';
import { getPageQuery } from '~/utils/pagination.utils';
import { useRouter } from 'next/router';
import { blogUrl } from '~/pages/u/[username]/constant.data';
import EmptyStatus from '~/components/EmptyStatus';
import useSWR from 'swr';
import StatusSelect from './StatusSelect.component';
import { api } from '@tidb-community/datasource';
import { ErrorPage } from '~/components';
import { getPageInfo } from './page-info';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);
  const { page, size } = getPageQuery(ctx.query);
  const { id: userId, type } = ctx.params;

  const pageInfo = getPageInfo(type);

  const [user, blogs] = await Promise.all([
    api.blog.users.get({ userId }),
    api.blog.users.getPosts({ userId, status: pageInfo.status, page, size }),
  ]);

  return {
    props: {
      ...i18nProps,
      userId,
      user,
      blogs,
    },
  };
};

const PostsPendingPage = ({ userId, user: userFromSSR, blogs: blogsFromSSR }) => {
  const router = useRouter();
  const { page, size } = getPageQuery(router.query);
  const pageInfo = getPageInfo(router.query.type);

  const { data: user, error: userError } = useSWR(['blog.users.get', JSON.stringify({ userId })], {
    fallbackData: userFromSSR,
    revalidateOnMount: true,
  });

  const { data: blogs, error: blogsError } = useSWR(
    ['blog.users.getPosts', JSON.stringify({ userId, status: pageInfo.status, page, size })],
    {
      fallbackData: blogsFromSSR,
      revalidateOnMount: true,
    }
  );

  const { hasAuthority, id: logonUserId } = usePrincipal();

  const error = userError || blogsError;
  const loading = !blogs || !user;
  if (error) return <ErrorPage />;
  if (loading) return <Skeleton active />;

  const showFilter = logonUserId === Number(userId) || hasAuthority('READ_OTHERS_POST');
  const tabExtendDOM = showFilter && <StatusSelect value={pageInfo.status} shallow />;

  return (
    <UserDetailsLayout
      userDetails={user}
      postCount={blogs?.page.totalElements}
      item="专栏"
      itemKey="posts/all"
      tabExtend={tabExtendDOM}
    >
      {loading ? (
        <Skeleton active />
      ) : blogs.page.totalElements === 0 ? (
        <EmptyStatus description={'你还没有发表过任何文章'} style={{ boxShadow: 'none' }}>
          快前往 <a href={blogUrl}>【社区专栏】</a> 撰写技术文章吧～
        </EmptyStatus>
      ) : (
        <BlogList blogs={blogs} showStatusBadge={pageInfo.showBadge ?? false} />
      )}
    </UserDetailsLayout>
  );
};

export default PostsPendingPage;
