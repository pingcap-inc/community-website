import * as React from 'react';
import { CommunityHead, ErrorPage } from '~/components';
import { getI18nProps } from '~/utils/i18n.utils';
import { Breadcrumb, Skeleton, Spin } from 'antd';
import Link from 'next/link';
import BlogLayout from '../BlogLayout.component';
import * as Styled from './index.styled';
import BlogList from '../_components/BlogList';
import { usePrincipal } from '../blog.hooks';
import { getPageQuery } from '~/utils/pagination.utils';
import useSWR from 'swr';
import { useRouter } from 'next/router';

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
  const { hasAuthority } = usePrincipal();
  const hasPermission = hasAuthority('REVIEW_POST');

  const router = useRouter();
  const { page, size } = getPageQuery(router.query);
  const { data: blogs, error: blogsError } = useSWR(['blog.getPosts', JSON.stringify({ status, page, size })], {
    revalidateOnMount: true,
  });

  const error = blogsError;
  const loading = !blogs || hasPermission === undefined;
  if (error) return <ErrorPage />;
  if (loading) return <Skeleton active />;

  if (hasPermission === false) <ErrorPage statusCode={403} errorMsg={'您没有 REVIEW_POST 权限，无法查看本页面'} />;

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

export default Page;
