import * as React from 'react';

import { api } from '@tidb-community/datasource';

import { getI18nProps } from '~/utils/i18n.utils';

import BlogHomepage from './home/BlogHomepage';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common', 'page-events'])(ctx);

  const categories = await api.blog.getCategories();
  const blogs = await api.blog.getRecommend();
  const hotTags = await api.blog.getHotTags();

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
