import * as React from 'react';
import { getI18nProps } from '~/utils/i18n.utils';

import { CommunityHead } from '~/components';
import { PageDataContext } from '~/context';

import BlogHome from './home';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common', 'page-events'])(ctx);

  return {
    props: {
      ...i18nProps,
    },
  };
};

export default function BlogHomepage() {
  return (
    <PageDataContext.Provider value={{}}>
      <CommunityHead
        title="博客"
        // description
        // keyword
      />
      <BlogHome />
    </PageDataContext.Provider>
  );
}
