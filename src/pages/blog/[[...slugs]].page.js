import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';

import { api } from '@tidb-community/datasource';

import { getI18nProps } from '~/utils/i18n.utils';
import { CommunityHead, ErrorPage } from '~/components';
import { PageDataContext } from '~/context';

import BlogLayout from './BlogLayout.component';
import * as styled from './_components/BlogHomepage/index.styled';
import CategoryList from './_components/CategoryList';
import CategoryListMobile from './_components/CategoryListMobile';
// import SearchOnMobile from './_components/SearchOnMobile';
import OrderBySwitch from './_components/OrderBySwitch';
import { BlogListInfiniteScroll } from './_components/BlogList';
import WriteBlogButton from './_components/WriteBlogButton';
import HotTagList from './_components/HotTagList';
import { getPageQuery } from '~/utils/pagination.utils';
import FeedbackCard from '~/pages/blog/_components/FeedbackCard';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Skeleton } from 'antd';
import { parseSlugs } from './_components/BlogHomepage/utils';

const CATEGORY_ALL = { name: '首页', slug: '' };

// we map 3 types of urls here:
// - /blog: slugs is falsy, info.type is 'all'
// - /blog/c/slug: info.type is 'category'
// - /blog/tag/slug: info.type is 'tag'
export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  const { slugs } = ctx.params;
  const { latest: queryLatest } = ctx.query;
  const info = parseSlugs(slugs, queryLatest);

  if (!info) {
    return {
      props: {},
      notFound: true,
    };
  }

  const { latest, slug, type } = info;

  const { page, size } = getPageQuery(ctx.query);

  const [category, tag] = await Promise.all([
    type === 'category' ? api.blog.getCategoryBySlug(slug) : Promise.resolve(null),
    type === 'tag' ? api.blog.getTagBySlug(slug) : Promise.resolve(null),
  ]);

  const [blogs, categories, hotTags] = await Promise.all([
    api.blog.getList({ latest, categoryID: category?.id, tagID: tag?.id, page, size }),
    api.blog.getCategories(),
    api.blog.getHotTags(),
  ]);

  return {
    props: {
      ...i18nProps,
      category,
      tag,
      categories,
      blogs,
      hotTags,
      slug,
    },
  };
};

export default function CategoryPage({
  category: categoryFromSSR,
  categories: categoriesFromSSR,
  blogs: blogsFromSSR,
  tag: tagFromSSR,
  hotTags: hotTagsFromSSR,
  slug: slugFromSSR, // https://github.com/vercel/swr/issues/284#issuecomment-609727071
}) {
  const router = useRouter();
  const { slugs, latest: queryLatest } = router.query;
  const info = useMemo(() => parseSlugs(slugs, queryLatest), [JSON.stringify(slugs), queryLatest]);

  const { data: category, error: categoryError } = useSWR(
    info.slug === 'category' ? ['blog.getCategoryBySlug', info?.slug || ''] : null,
    {
      fallbackData: info.type === 'all' ? CATEGORY_ALL : info?.slug === slugFromSSR ? categoryFromSSR : undefined,
      revalidateOnMount: true,
    }
  );

  const { data: tag, error: tagError } = useSWR(info.type === 'tag' ? ['blog.getTagBySlug', info?.slug || ''] : null, {
    fallbackData: info?.slug === slugFromSSR ? tagFromSSR : undefined,
    revalidateOnMount: true,
  });

  const { data: categories, error: categoriesError } = useSWR(['blog.getCategories', JSON.stringify({})], {
    fallbackData: categoriesFromSSR,
    revalidateOnMount: true,
  });

  const { data: hotTags, error: hotTagsError } = useSWR(['blog.getHotTags', JSON.stringify({})], {
    fallbackData: hotTagsFromSSR,
    revalidateOnMount: true,
  });

  const [filter, setFilter] = useState(category || tag);

  useEffect(() => {
    if (!info) {
      return;
    }
    if (info.slug === '') {
      setFilter(CATEGORY_ALL);
    } else {
      let filter;
      switch (info.type) {
        case 'category':
          filter = categories.content.find((c) => c.slug === info.slug);
          break;
        case 'tag':
          filter = hotTags.content.find((t) => t.slug === info.slug);
          break;
        default:
          filter = CATEGORY_ALL;
          break;
      }
      if (filter) {
        setFilter(filter);
      }
    }
  }, [info, categories, hotTags]);

  const orderBy = useMemo(() => {
    if (!info) {
      return [];
    }
    if (info.slug) {
      switch (info.type) {
        case 'category':
          return [
            { name: '推荐排序', url: `/blog/c/${info.slug}` },
            { name: '时间排序', url: `/blog/c/${info.slug}?latest=true` },
          ];
        case 'tag':
          return [
            { name: '推荐排序', url: `/blog/tag/${info.slug}` },
            { name: '时间排序', url: `/blog/tag/${info.slug}?latest=true` },
          ];
        default:
          return [];
      }
    } else {
      return [
        { name: '推荐排序', url: `/blog` },
        { name: '时间排序', url: `/blog?latest=true` },
      ];
    }
  }, [info]);

  const error = categoryError || categoriesError || tagError || hotTagsError;
  const loading = !categories || !hotTags;

  if (!info) return <ErrorPage statusCode={404} />;
  if (error) {
    console.error(error);
    return <ErrorPage />;
  }
  if (loading) return <Skeleton active />;

  return (
    <PageDataContext.Provider value={{ showRecommendedIcon: true }}>
      <CommunityHead
        title={`专栏 - ${filter.name}`}
        // description
        // keyword
      />
      <BlogLayout>
        <styled.Content>
          <styled.Container>
            <styled.Start>
              <CategoryList
                categories={categories}
                shallow
                current={info.type === 'category' && info.slug}
                type={info.type}
              />
            </styled.Start>
            <styled.Center>
              <CategoryListMobile
                categories={categories}
                shallow
                current={info.type === 'category' && info.slug}
                type={info.type}
              />
              {/*<SearchOnMobile />*/}
              <OrderBySwitch items={orderBy} shallow />
              <BlogListInfiniteScroll
                blogs={blogsFromSSR}
                api={api.blog.getList}
                params={{ latest: info.latest, [`${info.type}ID`]: filter.id }}
              />
            </styled.Center>
            <styled.End>
              <styled.WriteBlog>
                <WriteBlogButton />
              </styled.WriteBlog>
              <HotTagList hotTags={hotTags} shallow current={info.type === 'tag' && info.slug} />
              <FeedbackCard />
            </styled.End>
          </styled.Container>
        </styled.Content>
      </BlogLayout>
    </PageDataContext.Provider>
  );
}
