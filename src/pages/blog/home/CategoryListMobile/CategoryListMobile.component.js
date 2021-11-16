import React from 'react';
import * as Styled from './index.styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CategoryListMobile = ({ categories: { content } }) => {
  return (
    <Styled.Container>
      <Styled.List>
        {content.map((value, index) => (
          <Item key={index} {...value} />
        ))}
      </Styled.List>
    </Styled.Container>
  );
};

const Item = ({ name, slug }) => {
  const { asPath } = useRouter();
  const url = slug === '' ? `/blog` : `/blog/category/${slug}`;
  const selected = asPath === url;
  return (
    <Link href={`/${url}`}>
      <Styled.Item selected={selected}>{name}</Styled.Item>
    </Link>
  );
};

export default CategoryListMobile;
