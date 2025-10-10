import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Skeleton } from 'antd';
import useSWR from 'swr';

import { api } from '@tidb-community/datasource';

import { CommunityHead, ErrorPage } from '~/components';
import { PageDataContext } from '~/context';

import * as Styled from './index.styled';
import TagItem from './TagItem.component';
import BlogLayout from '../BlogLayout.component';

const page = 1;
const size = 99999;
const sort = 'posts,desc';

export const getServerSideProps = async () => {
  // const { page = 1, size = 999 } = getPageQuery(ctx.query);
  const tags = await api.blog.getTags({ page, size, sort });
  return {
    props: {
      tags,
    },
  };
};

const TagPage = ({ tags: tagsFromSSR }) => {
  const { data: tags, error: tagsError } = useSWR(['blog.getTags', JSON.stringify({ page, size, sort })], {
    fallbackData: tagsFromSSR,
    revalidateOnMount: true,
  });

  const error = tagsError;
  const loading = !tags;
  if (error) return <ErrorPage error={error} />;
  if (loading) return <Skeleton active />;

  return (
    <PageDataContext.Provider value={{}}>
      <CommunityHead
        title="博客 - 标签"
        // description
        // keyword
      />

      <BlogLayout>
        <Styled.Content>
          <Styled.Breadcrumb>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link href={'/blog'}>博客</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link href={'/blog/tag'}>标签</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Styled.Breadcrumb>
          <Styled.List>
            {tags.content.map((item, key) => (
              <Styled.Item key={key}>
                <TagItem {...item} />
              </Styled.Item>
            ))}
          </Styled.List>
        </Styled.Content>
      </BlogLayout>
    </PageDataContext.Provider>
  );
};

export default TagPage;
