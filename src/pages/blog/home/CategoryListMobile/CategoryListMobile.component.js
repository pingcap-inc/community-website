import React from 'react';
import * as Styled from './index.styled';
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
  const { query } = useRouter();
  const url = slug === '' ? `/blog` : `/blog/c/${slug}`;
  const selected = (query.slug || '') === slug;
  return (
    <a href={url}>
      <Styled.Item selected={selected}>{name}</Styled.Item>
    </a>
  );
};

export default CategoryListMobile;
