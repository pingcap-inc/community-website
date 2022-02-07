import * as React from 'react';

import { api } from '@tidb-community/datasource';

import { getI18nProps } from '~/utils/i18n.utils';
import BlogHomepage from '../home/BlogHomepage';
import { getPageQuery } from '~/utils/pagination.utils';
import { PageDataContext } from '~/context';

const { getCategories, getLatest, getHotTags } = api.blog;

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  const { page, size } = getPageQuery(ctx.query);
  const [categories, blogs, hotTags] = await Promise.all([getCategories(), getLatest({ page, size }), getHotTags()]);

  return {
    props: {
      ...i18nProps,
      categories,
      blogs,
      hotTags,
    },
  };
};

export default function BlogHomeLatestPage(props) {
  return (
    <PageDataContext.Provider value={{ showRecommendedIcon: false }}>
      <BlogHomepage {...props} blogApi={getLatest} />
    </PageDataContext.Provider>
  );
}
