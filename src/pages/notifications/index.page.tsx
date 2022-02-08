// @ts-ignore
import Layout from './layout';
import { useState } from 'react';
import { Filter } from './layout/menu';
import Asktug from '~/pages/notifications/Asktug.component';

const Page = () => {
  const [filter, setFilter] = useState<Filter>();

  return (
    <Layout filter={filter} onFilterChange={setFilter}>
      {filter.from === 'asktug' ? <Asktug filter={filter} /> : undefined}
    </Layout>
  );
};

export default Page;
