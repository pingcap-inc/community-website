import React from 'react';
import { getI18nProps } from '~/utils/i18n.utils';
import { api } from '@tidb-community/datasource';
import CategoryPage from '../index.page';
import { getPageQuery } from '~/utils/pagination.utils';
import { PageDataContext } from '~/context';

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

export default function LatestCategoryPage(props) {
  return (
    <PageDataContext.Provider value={{ showRecommendedIcon: false }}>
      <CategoryPage {...props} blogApi={api.blog.getLatest} />
    </PageDataContext.Provider>
  );
}
