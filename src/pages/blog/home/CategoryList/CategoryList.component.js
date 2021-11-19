import React from 'react';
import * as Styled from './index.styled';
import Link from 'next/link';
import { Divider } from 'antd';
import { useRouter } from 'next/router';

const CategoryList = ({ categories: { content } }) => {
  return (
    <Styled.Container>
      <Styled.List>
        {content.map((value, index) => (
          <Item key={index} {...value} />
        ))}
      </Styled.List>
      <Divider />
      <FixedLink url={'/blog'}>我的博客</FixedLink>
      <FixedLink url={'/blog'}>博客发布指南</FixedLink>
      <FixedLink url={'/blog'}>隐私协议</FixedLink>
      <FixedLink url={'/blog'}>联系我们</FixedLink>
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

const FixedLink = ({ url, children }) => {
  return (
    <Link href={`/${url}`}>
      <Styled.FixedLink>{children}</Styled.FixedLink>
    </Link>
  );
};

export default CategoryList;
