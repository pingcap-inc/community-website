// @ts-ignore
import Layout from './layout';
import { useState } from 'react';
import { Filter } from './layout/menu';
import useSWR from 'swr';
import { fetcher } from '~/api';

const Page = () => {
  const [filter, setFilter] = useState<Filter>();

  const me = useSWR(['me'], fetcher);

  return (
    <Layout filter={filter} onFilterChange={setFilter}>
      {filter?.from}|{filter?.type}
    </Layout>
  );
};

export default Page;
