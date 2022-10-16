import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Breadcrumb, Skeleton } from 'antd';

import { api } from '@tidb-community/datasource';

import { CommunityHead, ErrorPage } from '~/components';
import { PageDataContext } from '~/context';
import { getPageQuery } from '~/utils/pagination.utils';
import FeedbackCard from '~/pages/blog/_components/FeedbackCard';

import * as styled from './_components/BlogHomepage/index.styled';
import BlogLayout from './BlogLayout.component';
import CategoryList from './_components/CategoryList';
import CategoryListMobile from './_components/CategoryListMobile';
// import SearchOnMobile from './_components/SearchOnMobile';
import OrderBySwitch from './_components/OrderBySwitch';
import { BlogListInfiniteScroll } from './_components/BlogList';
import WriteBlogButton from './_components/WriteBlogButton';
import HotTagList from './_components/HotTagList';
import { parseSlugs } from './_components/BlogHomepage/utils';
import TagItem from './tag/TagItem.component';

const CATEGORY_ALL = { name: '首页', slug: '' };

// we map 3 types of urls here:
// - /blog: slugs is falsy, info.type is 'all'
// - /blog/c/slug: info.type is 'category'
// - /blog/tag/slug: info.type is 'tag'
export const getServerSideProps = async (ctx) => {
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
    type === 'category' ? api.blog.getCategoryBySlug({ slug }) : Promise.resolve(null),
    type === 'tag' ? api.blog.getTagBySlug({ slug }) : Promise.resolve(null),
  ]);

  const [blogs, categories, hotTags] = await Promise.all([
    api.blog.getPostList({ latest, categoryID: category?.id, tagID: tag?.id, page, size }),
    api.blog.getCategories(),
    api.blog.getHotTags(),
  ]);

  return {
    props: {
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
  // slug: slugFromSSR, // https://github.com/vercel/swr/issues/284#issuecomment-609727071
}) {
  const router = useRouter();
  const { slugs, latest: queryLatest } = router.query;
  const info = useMemo(() => parseSlugs(slugs, queryLatest), [slugs, queryLatest]);

  const { data: category, error: categoryError } = useSWR(
    info.slug === 'category' ? ['blog.getCategoryBySlug', info] : null,
    {
      fallbackData: info.type === 'all' ? CATEGORY_ALL : categoryFromSSR,
      revalidateOnMount: true,
    }
  );

  const { data: tag, error: tagError } = useSWR(info.type === 'tag' ? ['blog.getTagBySlug', info] : null, {
    fallbackData: tagFromSSR,
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

  useEffect(() => {
    if (info) {
      switch (info.type) {
        case 'tag':
          setFilter((filter) => {
            if (tag?.slug === info?.slug) {
              return tag;
            } else {
              return filter;
            }
          });
          break;
        case 'category':
          setFilter((filter) => {
            if (category?.slug === info?.slug) {
              return category;
            } else {
              return filter;
            }
          });
          break;
      }
    }
  }, [info, tag, category]);

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
  const loading = !categories && !hotTags;

  if (!info) return <ErrorPage statusCode={404} />;
  if (error) {
    console.error(error);
    return <ErrorPage error={error} />;
  }
  if (loading) return <Skeleton active />;

  return (
    <PageDataContext.Provider value={{ showRecommendedIcon: true }}>
      <CommunityHead
        title={filter?.name == null ? '专栏' : `专栏 - ${filter?.name}`}
        description={
          '这里有来自 TiDB 社区用户分享的管理与运维、实践案例、架构选型、原理解读、应用开发、社区动态等一系列技术文章，也期待你的分享~'
        }
        // keyword
      />
      <BlogLayout>
        <styled.Content>
          {info.type === 'tag' && (
            <styled.Breadcrumb>
              <Breadcrumb>
                <Breadcrumb.Item>
                  <Link href={'/blog'} shallow passHref>
                    <a>专栏</a>
                  </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Link href={'/blog/tag'}>
                    <a>标签</a>
                  </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{tag?.name ?? '加载中...'}</Breadcrumb.Item>
              </Breadcrumb>
            </styled.Breadcrumb>
          )}
          <styled.Container>
            <styled.Start $forTag={info.type === 'tag'}>
              {info.type === 'tag' ? (
                tag ? (
                  <TagItem {...tag} />
                ) : (
                  <Skeleton active />
                )
              ) : (
                <CategoryList
                  categories={categories}
                  shallow
                  current={info.type === 'category' && info.slug}
                  type={info.type}
                />
              )}
            </styled.Start>
            <styled.Center $forTag={info.type === 'tag'}>
              <CategoryListMobile
                categories={categories}
                shallow
                current={info.type === 'category' && info.slug}
                type={info.type}
              />
              {/*<SearchOnMobile />*/}
              <OrderBySwitch items={orderBy} shallow />
              {filter ? (
                <BlogListInfiniteScroll
                  blogs={blogsFromSSR}
                  api={api.blog.getPostList}
                  params={{ latest: info.latest, [`${info.type}ID`]: filter.id }}
                />
              ) : (
                <Skeleton active />
              )}
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
