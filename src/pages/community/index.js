import React from 'react';

import Activities from './activities';
import Career from './career';
import Contributor from './contributor';
import Learning from './learning';
import UserGroup from './userGroup';
import { CoreLayout } from 'layouts';

const Community = () => {
  return (
    <CoreLayout>
      <Activities />
      <Learning />
      <UserGroup />
      <Contributor />
      <Career />
    </CoreLayout>
  );
};

export default Community;
