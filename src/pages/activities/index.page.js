import React from 'react';

import About from './about';
import List from './list';
import { PageDataContext } from '~/context';
import { getI18nProps } from '~/utils/i18n.utils';

export const getServerSideProps = async (ctx) => {
  const { env } = process;
  const isEnabled = env.NEXT_PUBLIC_FT_ACTIVITIES;

  const i18nProps = await getI18nProps(['page-activities'])(ctx);

  if (!isEnabled) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...i18nProps,
    },
  };
};

const Page = ({ data }) => (
  <PageDataContext.Provider value={{ data }}>
    <About />
    <List />
  </PageDataContext.Provider>
);

export default Page;
