import React from 'react';
import * as Styled from './BlogLayout.styled';

import { CoreLayout } from '~/layouts';

const BlogLayout = ({ children }) => {
  return (
    <CoreLayout>
      <Styled.Background>
        <Styled.Content>{children}</Styled.Content>
      </Styled.Background>
    </CoreLayout>
  );
};

export default BlogLayout;
