import * as React from 'react';
import { CommunityHead } from '~/components';
import { getI18nProps } from '~/utils/i18n.utils';
import { Breadcrumb } from 'antd';
import Link from 'next/link';
import BlogLayout from '../BlogLayout.component';
import * as Styled from './index.styled';
import { api } from '@tidb-community/datasource';
import AuditList from './AuditList';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  const blogs = await api.blog.getAudits();

  return {
    props: {
      ...i18nProps,
      blogs,
    },
  };
};

const PageContent = ({ blogs }) => {
  // const { roles, authorities, hasRole, hasAuthority, isAuthor, isLogin, id, loading } = usePrincipal();
  // TODO: check if current logon user is administrator
  return (
    <BlogLayout>
      <Styled.Content>
        <Styled.Container>
          <Styled.Breadcrumb>
            <Breadcrumb.Item>
              <Link href="/blog">博客</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>待审核</Breadcrumb.Item>
          </Styled.Breadcrumb>
          <AuditList data={blogs} />
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
