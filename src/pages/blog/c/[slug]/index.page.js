import * as React from 'react';

import { api } from '@tidb-community/datasource';

import { getI18nProps } from '~/utils/i18n.utils';
import { CommunityHead } from '~/components';
import { PageDataContext } from '~/context';

import BlogLayout from '../../BlogLayout.component';
import * as styled from '../../home/BlogHomepage/index.styled';
import CategoryList from '../../home/CategoryList';
import CategoryListMobile from '../../home/CategoryListMobile';
import SearchOnMobile from '../../home/SearchOnMobile';
import OrderBySwitch from '../../home/OrderBySwitch';
import BlogList from '../../BlogList';
import WriteBlogButton from '../../WriteBlogButton';
import HotTagList from '../../HotTagList';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  const { slug } = ctx.params;

  // const { page, size } = getPageQuery(ctx.query);
  const category = await api.blog.getCategoryBySlug(slug);
  const [categories, blogs, hotTags] = await Promise.all([
    api.blog.getCategories(),
    api.blog.getRecommend({ categoryID: category.id }),
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

export default function CategoryPage({ category, categories, blogs, hotTags }) {
  const categoriesWithAll = { ...categories };
  const contentWithAll = [...categories.content];
  categoriesWithAll.content = contentWithAll;
  contentWithAll.unshift({ name: '全部分类', slug: '' });

  const { slug } = category;

  const orderBy = [
    { name: '推荐排序', url: `/blog/c/${slug}` },
    { name: '时间排序', url: `/blog/c/${slug}/latest` },
  ];

  return (
    <PageDataContext.Provider value={{}}>
      <CommunityHead
        title="专栏 - 首页"
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
              <SearchOnMobile />
              <OrderBySwitch items={orderBy} />
              <BlogList blogs={blogs} />
            </styled.Center>
            <styled.End>
              <styled.WriteBlog>
                <WriteBlogButton />
              </styled.WriteBlog>
              <HotTagList hotTags={hotTags} />
            </styled.End>
          </styled.Container>
        </styled.Content>
      </BlogLayout>
    </PageDataContext.Provider>
  );
}
