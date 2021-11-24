import React from 'react';
import * as Styled from './index.styled';
import { Breadcrumb } from 'antd';
import Link from 'next/link';
import { BlogInfo } from '@tidb-community/ui';

import { getI18nProps } from '~/utils/i18n.utils';
import { link as linkUtils } from '~/utils';
import { CommunityHead } from '~/components';
import { PageDataContext } from '~/context';

import BlogLayout from '../../BlogLayout.component';
import Tab from '../Tab';
import { useRouter } from 'next/router';
import { api } from '@tidb-community/datasource';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  const { id } = ctx.params;

  const data = await api.blog.users.getComments(id);

  return {
    props: {
      ...i18nProps,
      id,
      data,
    },
  };
};

const Comments = ({ id, data: { content } }) => {
  const router = useRouter();

  return (
    <PageDataContext.Provider value={{}}>
      <CommunityHead
        title="博客"
        // description
        // keyword
      />

      <BlogLayout>
        <Styled.Content>
          <Styled.Container>
            <Styled.Breadcrumb>
              <Breadcrumb.Item>
                <Link href="/blog">博客</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>用户</Breadcrumb.Item>
            </Styled.Breadcrumb>

            <Tab id={id} selectedKey="comments" />

            <Styled.List>
              {content.map((value) => {
                const onClick = () => router.push(`/blog/${value.id}`);
                const onClickAuthor = () => router.push(`/blog/user/${value.author.id}`);
                const onClickCategory = () => router.push(`/blog/category/${value.category.slug}`);
                const onClickTag = (tag) => router.push(`/blog/tag/${tag.slug}`);
                value.author = value.commenter;
                value.usernameExtends = '评论了文章';
                return (
                  <Styled.Item key={value.id}>
                    <BlogInfo
                      {...value}
                      onClick={onClick}
                      onClickAuthor={onClickAuthor}
                      onClickCategory={onClickCategory}
                      onClickTag={onClickTag}
                    />
                  </Styled.Item>
                );
              })}
            </Styled.List>
          </Styled.Container>
        </Styled.Content>
      </BlogLayout>
    </PageDataContext.Provider>
  );
};

export default Comments;
