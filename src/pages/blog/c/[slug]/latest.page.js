import * as React from 'react';

import { api } from '@tidb-community/datasource';

import { getI18nProps } from '~/utils/i18n.utils';
import { CommunityHead, ErrorPage } from '~/components';
import { PageDataContext } from '~/context';

import BlogLayout from '../../BlogLayout.component';
import * as styled from '../../home/BlogHomepage/index.styled';
import CategoryList from '../../home/CategoryList';
import CategoryListMobile from '../../home/CategoryListMobile';
// import SearchOnMobile from '../../home/SearchOnMobile';
import OrderBySwitch from '../../home/OrderBySwitch';
import { BlogListInfiniteScroll } from '../../_components/BlogList';
import WriteBlogButton from '../../_components/WriteBlogButton';
import HotTagList from '../../_components/HotTagList';
import { getPageQuery } from '~/utils/pagination.utils';
import FeedbackCard from '~/pages/blog/_components/FeedbackCard';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Skeleton } from 'antd';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  const { slug } = ctx.params;

  const { page, size } = getPageQuery(ctx.query);
  const category = await api.blog.getCategoryBySlug(slug);
  const [categories, blogs, hotTags] = await Promise.all([
    api.blog.getCategories(),
    api.blog.getLatest({ categoryID: category.id, page, size }),
    api.blog.getHotTags(),
  ]);

  return {
    props: {
      ...i18nProps,
      category,
      categories,
      blogs,
      hotTags,
    },
  };
};

export default function CategoryPage({
  category,
  categories: categoriesFromSSR,
  blogs: blogsFromSSR,
  hotTags: hotTagsFromSSR,
}) {
  const router = useRouter();
  const { page, size } = getPageQuery(router.query);

  const { data: categories, error: categoriesError } = useSWR(['blog.getCategories', JSON.stringify({})], {
    fallbackData: categoriesFromSSR,
    revalidateOnMount: true,
  });
  const { data: blogs, error: blogsError } = useSWR(['blog.getLatest', JSON.stringify({ page, size })], {
    fallbackData: blogsFromSSR,
    revalidateOnMount: true,
  });
  const { data: hotTags, error: hotTagsError } = useSWR(['blog.getHotTags', JSON.stringify({})], {
    fallbackData: hotTagsFromSSR,
    revalidateOnMount: true,
  });

  const loading = categories === undefined || blogs === undefined || hotTags === undefined;
  const error = categoriesError !== undefined || blogsError !== undefined || hotTagsError !== undefined;
  if (loading) return <Skeleton active />;
  if (error) return <ErrorPage />;

  const categoriesWithAll = { ...categories };
  const contentWithAll = [...categories.content];
  categoriesWithAll.content = contentWithAll;
  contentWithAll.unshift({ name: '全部文章', slug: '' });

  const { slug } = category;

  const orderBy = [
    { name: '推荐排序', url: `/blog/c/${slug}` },
    { name: '时间排序', url: `/blog/c/${slug}/latest` },
  ];

  return (
    <PageDataContext.Provider value={{ showRecommendedIcon: true }}>
      <CommunityHead
        title={`专栏 - ${category.name}`}
        // description
        // keyword
      />
      <BlogLayout>
        <styled.Content>
          <styled.Container>
            <styled.Start>
              <CategoryList categories={categoriesWithAll} />
            </styled.Start>
            <styled.Center>
              <CategoryListMobile categories={categoriesWithAll} />
              {/*<SearchOnMobile />*/}
              <OrderBySwitch items={orderBy} />
              <BlogListInfiniteScroll blogs={blogs} api={api.blog.getLatest} params={{ categoryID: category.id }} />
            </styled.Center>
            <styled.End>
              <styled.WriteBlog>
                <WriteBlogButton />
              </styled.WriteBlog>
              <HotTagList hotTags={hotTags} />
              <FeedbackCard />
            </styled.End>
          </styled.Container>
        </styled.Content>
      </BlogLayout>
    </PageDataContext.Provider>
  );
}
