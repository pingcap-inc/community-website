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
import { BlogInfo } from '@tidb-community/ui';
import { useRouter } from 'next/router';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  const { id } = ctx.params;

  const [user, data] = await Promise.all([api.blog.users.get(id), api.blog.users.getPosts(id)]);

  return {
    props: {
      ...i18nProps,
      id,
      data,
      user,
    },
  };
};

const Posts = ({ id, data: { content }, user: { posts, likes, comments, favorites } }) => {
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

            <Tab id={id} selectedKey="posts" posts={posts} likes={likes} favorites={favorites} comments={comments} />

            {content.map((value) => {
              const onClick = () => router.push(`/blog/${value.id}`);
              const onClickAuthor = () => router.push(`/blog/user/${value.author.id}`);
              const onClickCategory = () => router.push(`/blog/category/${value.category.slug}`);
              const onClickTag = (tag) => router.push(`/blog/tag/${tag.slug}`);
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
          </Styled.Container>
        </Styled.Content>
      </BlogLayout>
    </PageDataContext.Provider>
  );
};

export default Posts;
