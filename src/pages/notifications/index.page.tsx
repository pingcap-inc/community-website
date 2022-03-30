// @ts-ignore
import Layout from './layout';
import { useState } from 'react';
import { Filter } from './layout/menu';
import Asktug from './Asktug.component';
import Blog from './Blog.component';
import { getI18nProps } from '~/utils/i18n.utils';

export const getStaticProps = async (context) => {
  const i18nProps = await getI18nProps(['common'])();

  return {
    props: {
      ...i18nProps,
      initIdx: context.query.from === 'blog' ? 4 : 0,
    },
  };
};

const Page = ({ initIdx }) => {
  const [filter, setFilter] = useState<Filter>();
  return (
    <Layout filter={filter} onFilterChange={setFilter} initIdx={initIdx}>
      {filter?.from === 'asktug' ? <Asktug filter={filter} /> : undefined}
      {/* prevent react cache */}
      <div />
      {filter?.from === 'blog' ? <Blog filter={filter} /> : undefined}
    </Layout>
  );
};

export default Page;
