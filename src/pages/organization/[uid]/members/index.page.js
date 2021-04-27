import * as R from 'ramda';
import React from 'react';

import Banner from './banner';
import List from './list';
import data from './members.data';
import { CommunityHead } from 'components/head';
import { CoreLayout } from 'layouts';

const Members = () => {
  const bannerProps = R.pick(['description', 'logo', 'name'], data);

  return (
    <>
      <CommunityHead title="企业成员" />

      <CoreLayout domain="tidb.io" hasMargin>
        <Banner {...bannerProps} />
        <List />
      </CoreLayout>
    </>
  );
};

export default Members;
