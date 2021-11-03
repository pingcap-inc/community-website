import React from 'react';
import * as Styled from './BlogLayout.styled';

import { CoreLayout } from '~/layouts';

const BlogLayout = ({ children }) => {
  return (
    <CoreLayout>
      <Styled.Background>{children}</Styled.Background>
    </CoreLayout>
  );
};

export default BlogLayout;
