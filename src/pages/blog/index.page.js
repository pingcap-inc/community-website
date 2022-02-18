import * as React from 'react';

import { api } from '@tidb-community/datasource';

import { getI18nProps } from '~/utils/i18n.utils';

import BlogHomepage from './home/BlogHomepage';
import { getPageQuery } from '~/utils/pagination.utils';
import { CommunityHead, ErrorPage } from '~/components';
import { PageDataContext } from '~/context';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { Skeleton } from 'antd';

const { getCategories, getRecommend, getHotTags } = api.blog;

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);
  const { page, size } = getPageQuery(ctx.query);
  const [categories, blogs, hotTags] = await Promise.all([getCategories(), getRecommend({ page, size }), getHotTags()]);
  return {
    props: {
      ...i18nProps,
      categories,
      blogs,
      hotTags,
    },
  };
};

export default function BlogHomePage({ categories: categoriesFromSSR, blogs: blogsFromSSR, hotTags: hotTagsFromSSR }) {
  const router = useRouter();
  const { page, size } = getPageQuery(router.query);

  const { data: categories, error: categoriesError } = useSWR(['blog.getCategories', JSON.stringify({})], {
    fallbackData: categoriesFromSSR,
    revalidateOnMount: true,
  });
  const { data: blogs, error: blogsError } = useSWR(['blog.getRecommend', JSON.stringify({ page, size })], {
    fallbackData: blogsFromSSR,
    revalidateOnMount: true,
  });
  const { data: hotTags, error: hotTagsError } = useSWR(['blog.getHotTags', JSON.stringify({})], {
    fallbackData: hotTagsFromSSR,
    revalidateOnMount: true,
  });

  const props = { categories, blogs, hotTags };

  const error = categoriesError !== undefined || blogsError !== undefined || hotTagsError !== undefined;
  const loading = categories === undefined || blogs === undefined || hotTags === undefined;
  if (error) return <ErrorPage />;
  if (loading) return <Skeleton active />;

  return (
    <PageDataContext.Provider value={{ showRecommendedIcon: true }}>
      <CommunityHead
        title="专栏 - 首页"
        // description
        // keyword
      />
      <BlogHomepage {...props} blogApi={getRecommend} />
    </PageDataContext.Provider>
  );
}
