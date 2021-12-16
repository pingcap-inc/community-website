import * as React from 'react';
import { CommunityHead } from '~/components';
import { getI18nProps } from '~/utils/i18n.utils';
import { Breadcrumb, Spin } from 'antd';
import Link from 'next/link';
import BlogLayout from '../BlogLayout.component';
import * as Styled from './index.styled';
import { api } from '@tidb-community/datasource';
import BlogList from '../BlogList';
import { usePrincipal } from '../blog.hooks';
import { getPageQuery } from '~/utils/pagination.utils';
import { useEffect, useState } from 'react';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);
  const { page, size } = getPageQuery(ctx.query);
  return {
    props: {
      ...i18nProps,
      page,
      size,
    },
  };
};

const PageContent = ({ page, size }) => {
  const { hasAuthority } = usePrincipal();
  const [blogs, setBlogs] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      const status = 'PENDING';
      const data = await api.blog.getPosts({ status, page, size });
      setBlogs(data);
    }
    fetchData();
  }, [page, size]);

  const hasPermission = hasAuthority('REVIEW_POST');
  if (!hasPermission) {
    return '您没有 REVIEW_POST 权限，无法查看本页面';
  }

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
          {blogs ? <BlogList blogs={blogs} /> : <Spin />}
        </Styled.Container>
      </Styled.Content>
    </BlogLayout>
  );
};

const Page = ({ blogs }) => (
  <>
    <CommunityHead title="待审核文章" />
    <PageContent blogs={blogs} />
  </>
);

export default Page;
