import * as React from 'react';
import { CommunityHead } from '~/components';
import { getI18nProps } from '~/utils/i18n.utils';
import { Breadcrumb } from 'antd';
import Link from 'next/link';
import BlogLayout from '../BlogLayout.component';
import * as Styled from './index.styled';
import { api } from '@tidb-community/datasource';
import BlogList from '../BlogList';
import { usePrincipal } from '../blog.hooks';
import { getPageQuery } from '~/utils/pagination.utils';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  const { page, size } = getPageQuery(ctx.query);
  const status = 'PENDING';

  const blogs = await api.blog.getPosts({ status, page, size });

  return {
    props: {
      ...i18nProps,
      blogs,
    },
  };
};

const PageContent = ({ blogs }) => {
  const { hasRole } = usePrincipal();
  const isEditor = hasRole('EDITOR');
  // TODO: check if current logon user is administrator
  if (!isEditor) {
    return '403';
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
          <BlogList blogs={blogs} />
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
