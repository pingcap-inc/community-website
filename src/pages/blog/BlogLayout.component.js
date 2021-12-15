import React from 'react';

import { CoreLayout } from '~/layouts';

const BlogLayout = ({ children }) => {
  return <CoreLayout backgroundColor={'#e9eaee'}>{children}</CoreLayout>;
};

export default BlogLayout;
