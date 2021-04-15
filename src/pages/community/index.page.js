import React from 'react';

import Activities from './activities';
import Banner from './banner';
import Career from './career';
import Contributor from './contributor';
import Learning from './learning';
import UserGroup from './userGroup';
import { CommunityHead } from 'components/head';
import { CoreLayout } from 'layouts';

const Community = () => (
  <>
    <CommunityHead />

    <CoreLayout locale="en">
      <Banner />
      <Activities />
      <Learning />
      <UserGroup />
      <Contributor />
      <Career />
    </CoreLayout>
  </>
);

export default Community;
