import React from 'react';
import NextLink from 'next/link';
import * as Styled from './link.styled';

const Link = ({ href, children, fontSize = '16px', ...props }) => {
  const innerDOM = (
    <Styled.Container fontSize={fontSize} {...props}>
      {children}
    </Styled.Container>
  )
  if (href) {
    return (
      <NextLink href={href} passHref>
        {innerDOM}
      </NextLink>
    ); 
  } else {
    return innerDOM
  }
};

export default Link;
