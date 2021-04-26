import React from 'react';

import Banner from './banner';
import List from './list';
import { CoreLayout } from 'layouts';

const Members = () => (
  <CoreLayout domain="tidb.io" hasMargin>
    <Banner />
    <List />
  </CoreLayout>
);

export default Members;
