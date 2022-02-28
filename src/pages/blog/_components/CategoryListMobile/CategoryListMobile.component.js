import React from 'react';
import * as Styled from './index.styled';
import Link from 'next/link';

const CategoryListMobile = ({ categories: { content }, current, shallow, type }) => {
  return (
    <Styled.Container>
      <Styled.List>
        <Item key="" name="全部文章" slug="" active={type === 'all'} shallow={shallow} />
        {content.map((value, index) => (
          <Item key={index} {...value} shallow={shallow} active={current === value.slug} />
        ))}
      </Styled.List>
    </Styled.Container>
  );
};

const Item = ({ name, slug, shallow, active }) => {
  const url = slug === '' ? `/blog` : `/blog/c/${slug}`;
  return (
    <Link href={url} passHref shallow={shallow}>
      <Styled.Item selected={active}>{name}</Styled.Item>
    </Link>
  );
};

export default CategoryListMobile;
