import React from 'react';
import { useRouter } from 'next/router';

import * as Styled from './link.styled';
import { link as linkUtils } from '~/utils';

const Link = ({ children, className, href, fontSize = '16px' }) => {
  const router = useRouter();

  const onClick = (link) => (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, link);
  };

  return (
    <Styled.Container className={className} onClick={onClick(href)} fontSize={fontSize}>
      {children}
    </Styled.Container>
  );
};

export default Link;
