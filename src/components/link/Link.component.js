import React from 'react';
import { useRouter } from 'next/router';

import * as Styled from './link.styled';
import { link as linkUtils } from '~/utils';

const Link = ({ href, children }) => {
  const router = useRouter();

  const onClick = (link) => (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, link);
  };

  return <Styled.Container onClick={onClick(href)}>{children}</Styled.Container>;
};

export default Link;
