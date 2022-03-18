import React from 'react';
import NextLink from 'next/link';
import * as Styled from './link.styled';

const Link = ({ href, children, fontSize = '16px', ...props }) => {
  return (
    <NextLink href={href} passHref>
      <Styled.Container fontSize={fontSize} {...props}>
        {children}
      </Styled.Container>
    </NextLink>
  );
};

export default Link;
