import * as React from 'react';
import { CommunityHead, ErrorPage } from '~/components';
import { getI18nProps } from '~/utils/i18n.utils';
import { Breadcrumb, Skeleton } from 'antd';
import Link from 'next/link';
import BlogLayout from '../BlogLayout.component';
import * as Styled from './index.styled';
import BlogList from '../_components/BlogList';
import { getPageQuery } from '~/utils/pagination.utils';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { AuthenticateState, blogAuthenticated, useAuthenticatedState } from '~/utils/auth.utils';

const status = 'PENDING';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);
  return {
    props: {
      ...i18nProps,
    },
  };
};

const PageContent = () => {
  const authenticatedState = useAuthenticatedState();
  const router = useRouter();
  const { page, size } = getPageQuery(router.query);
  const sort = 'lastModifiedAt,desc';
  const { data: blogs, error: blogsError } = useSWR(['blog.getAllPostList', { status, page, size, sort }], {
    revalidateOnMount: true,
  });

  const error = blogsError;
  const loading = !blogs || authenticatedState === AuthenticateState.LOADING;
  if (error) return <ErrorPage error={error} />;
  if (loading) return <Skeleton active />;

  return (
    <BlogLayout>
      <Styled.Content>
        <Styled.Container>
          <Styled.Breadcrumb>
            <Breadcrumb.Item>
              <Link href="/blog">专栏</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>待审核</Breadcrumb.Item>
          </Styled.Breadcrumb>
          <BlogList blogs={blogs} getPostUrl={(slug) => `/blog/audits/${slug}`} />
        </Styled.Container>
      </Styled.Content>
    </BlogLayout>
  );
};

const Page = (props) => (
  <>
    <CommunityHead title="待审核文章" />
    <PageContent {...props} />
  </>
);

Page.useAuthenticated = blogAuthenticated(['REVIEW_POST'], []);

export default Page;
