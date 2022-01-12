import * as React from 'react';

import { api } from '@tidb-community/datasource';

import { getI18nProps } from '~/utils/i18n.utils';

import BlogHomepage from './home/BlogHomepage';
import { getPageQuery } from '~/utils/pagination.utils';
import { CommunityHead } from '~/components';
import { PageDataContext } from '~/context';

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

export default function BlogHomePage(props) {
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
