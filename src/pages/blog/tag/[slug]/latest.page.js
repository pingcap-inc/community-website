import React from 'react';
import * as Styled from './index.styled';

import { api } from '@tidb-community/datasource';

import { CommunityHead, ErrorPage } from '~/components';
import { PageDataContext } from '~/context';
import { getI18nProps } from '~/utils/i18n.utils';

import OrderBySwitch from '../../home/OrderBySwitch';
import { BlogListInfiniteScroll } from '../../_components/BlogList';
import HotTagList from '../../_components/HotTagList';
import TagItem from '../TagItem.component';
import BlogLayout from '../../BlogLayout.component';
import WriteBlogButton from '../../_components/WriteBlogButton';
import { Breadcrumb, Skeleton } from 'antd';
import Link from 'next/link';
import useSWR from 'swr';
import { getPageQuery } from '~/utils/pagination.utils';
import { useRouter } from 'next/router';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);
  const { page, size } = getPageQuery(ctx.query);
  const { slug } = ctx.params;
  const tag = await api.blog.getTagBySlug(slug);
  const [blogs, hotTags] = await Promise.all([
    api.blog.getLatest({ tagID: tag.id, page, size }),
    api.blog.getHotTags(),
  ]);

  return {
    props: {
      ...i18nProps,
      blogs,
      hotTags,
      tag,
      slug,
    },
  };
};

const TagDetail = ({ blogs: blogsFromSSR, hotTags, tag, slug }) => {
  const router = useRouter();
  const { page, size } = getPageQuery(router.query);

  const { data: blogs, error: blogsError } = useSWR(['blog.getLatest', JSON.stringify({ tagID: tag.id, page, size })], {
    fallbackData: blogsFromSSR,
    revalidateOnMount: true,
  });

  const error = blogsError;
  const loading = !blogs;
  if (error) return <ErrorPage />;
  if (loading) return <Skeleton active />;

  const orderBy = [
    { name: '推荐排序', url: `/blog/tag/${slug}` },
    { name: '时间排序', url: `/blog/tag/${slug}/latest` },
  ];

  return (
    <PageDataContext.Provider value={{ showRecommendedIcon: false }}>
      <CommunityHead
        title={`专栏 - ${tag.name}`}
        // description
        // keyword
      />

      <BlogLayout>
        <Styled.Content>
          <Styled.Breadcrumb>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link href={'/blog'}>专栏</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link href={'/blog/tag'}>标签</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{tag.name}</Breadcrumb.Item>
            </Breadcrumb>
          </Styled.Breadcrumb>
          <Styled.Container>
            <Styled.Start>
              <TagItem {...tag} />
            </Styled.Start>
            <Styled.Center>
              <OrderBySwitch items={orderBy} />
              <BlogListInfiniteScroll blogs={blogs} api={api.blog.getLatest} params={{ tagID: tag.id }} />
            </Styled.Center>
            <Styled.End>
              <WriteBlogButton />
              <HotTagList hotTags={hotTags} />
            </Styled.End>
          </Styled.Container>
        </Styled.Content>
      </BlogLayout>
    </PageDataContext.Provider>
  );
};

export default TagDetail;
