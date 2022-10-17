import React, { useMemo, useState } from 'react';

import { CommunityHead } from '~/components';

import Layout from './layout';
import { Filter } from './layout/menu';
import Asktug from './Asktug.component';
import Blog from './Blog.component';

const Page = ({ initIdx }) => {
  const [filter, setFilter] = useState<Filter>();
  const titleSuffix = useMemo(() => {
    switch (filter?.from) {
      case 'asktug':
        return 'AskTUG';
      case 'blog':
        return '专栏';
      default:
        return undefined;
    }
  }, [filter?.from]);

  return (
    <>
      <CommunityHead title={titleSuffix == null ? '通知' : `通知 - ${titleSuffix}`} />
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
