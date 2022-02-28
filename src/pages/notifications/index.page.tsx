// @ts-ignore
import Layout from './layout';
import { useState } from 'react';
import { Filter } from './layout/menu';
import Asktug from './Asktug.component';
import Blog from './Blog.component';

const Page = () => {
  const [filter, setFilter] = useState<Filter>();

  return (
    <Layout filter={filter} onFilterChange={setFilter}>
      {filter?.from === 'asktug' ? <Asktug filter={filter} /> : undefined}
      {/* prevent react cache */}
      <div />
      {filter?.from === 'blog' ? <Blog filter={filter} /> : undefined}
    </Layout>
  );
};

export default Page;
