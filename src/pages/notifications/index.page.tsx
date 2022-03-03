// @ts-ignore
import Layout from './layout';
import { useState } from 'react';
import { Filter } from './layout/menu';
import Asktug from './Asktug.component';
import Blog from './Blog.component';

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

Page.getInitialProps = async (context) => {
  return {
    initIdx: context.query.from === 'blog' ? 4 : 0,
  };
};

export default Page;
