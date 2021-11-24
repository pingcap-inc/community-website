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
import BlogList from '../../BlogList';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  const { id } = ctx.params;

  const [user, blogs] = await Promise.all([api.blog.users.get(id), api.blog.users.getPosts(id)]);

  return {
    props: {
      ...i18nProps,
      id,
      blogs,
      user,
    },
  };
};

const Posts = ({ id, blogs, users: { posts, likes, comments, favorites } }) => {
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

            <BlogList blogs={blogs} />
          </Styled.Container>
        </Styled.Content>
      </BlogLayout>
    </PageDataContext.Provider>
  );
};

export default Posts;
