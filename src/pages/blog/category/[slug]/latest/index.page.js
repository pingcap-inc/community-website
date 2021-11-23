import { getI18nProps } from '../../../../../utils/i18n.utils';
import { api } from '@tidb-community/datasource/src';
import CategoryPage from '../index.page';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common', 'page-events'])(ctx);

  const { slug } = ctx.params;

  const category = await api.blog.getCategoryBySlug(slug);
  const [categories, blogs, hotTags] = await Promise.all([
    api.blog.getCategories(),
    api.blog.getLatest({ categoryID: category.id }),
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
  return <CategoryPage {...props} />;
}
