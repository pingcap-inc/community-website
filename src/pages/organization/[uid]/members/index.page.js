import React from 'react';

import Banner from './banner';
import List from './list';
import { CommunityHead } from 'components/head';
import { CoreLayout } from 'layouts';

const Members = () => (
  <>
    <CommunityHead title="企业成员" />

    <CoreLayout domain="tidb.io" hasMargin>
      <Banner />
      <List />
    </CoreLayout>
  </>
);

export default Members;
