import * as React from 'react';

import { api } from '@tidb-community/datasource';

import { getI18nProps } from '~/utils/i18n.utils';

import BlogHomepage from './home/BlogHomepage';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  const { getCategories, getRecommend, getHotTags } = api.blog;

  const [categories, blogs, hotTags] = await Promise.all([getCategories(), getRecommend(), getHotTags()]);

  return {
    props: {
      ...i18nProps,
      categories,
      blogs,
      hotTags,
    },
  };
};

export default function BlogHomePage(props) {
  return <BlogHomepage {...props} />;
}
