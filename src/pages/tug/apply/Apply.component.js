import React from 'react';

import { CoreLayout, SplitLayout } from '~/layouts';
import ApplyStart from './ApplyStart';
import ApplyEnd from './ApplyEnd';

const Apply = () => (
  <CoreLayout domain="tidb.io">
    <SplitLayout dividerColor={'rgba(108, 116, 150, 0.4)'} marginTop="30px" marginBottom="41px">
      <ApplyStart />
      <ApplyEnd />
    </SplitLayout>
  </CoreLayout>
);

export default Apply;
