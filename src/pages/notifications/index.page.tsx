// @ts-ignore
import Layout from './layout';
import React, { useState } from 'react';
import { Filter } from './layout/menu';
import Asktug from './Asktug.component';
import Blog from './Blog.component';
import { getI18nProps } from '~/utils/i18n.utils';
import { GetServerSideProps } from 'next';
import { CommunityHead } from '~/components';

export const getServerSideProps: GetServerSideProps = async (context) => {
  //@ts-ignore
  const i18nProps = await getI18nProps(['common'])(context);

  return {
    props: {
      ...i18nProps,
      initIdx: context.params.from === 'blog' ? 4 : 0,
    },
  };
};

const Page = ({ initIdx }) => {
  const [filter, setFilter] = useState<Filter>();
  return (
    <>
      <CommunityHead title={'通知'} />
      <Layout filter={filter} onFilterChange={setFilter} initIdx={initIdx}>
        {filter?.from === 'asktug' ? <Asktug filter={filter} /> : undefined}
        {/* prevent react cache */}
        <div />
        {filter?.from === 'blog' ? <Blog filter={filter} /> : undefined}
      </Layout>
    </>
  );
};

export default Page;
