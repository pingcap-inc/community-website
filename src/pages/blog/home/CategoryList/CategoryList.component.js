import React from 'react';
import * as Styled from './index.styled';
import Link from 'next/link';
import { Divider } from 'antd';
import { useRouter } from 'next/router';
import { usePrincipal } from '../../blog.hooks';

const CategoryList = ({ categories: { content } }) => {
  const { isLogin, id } = usePrincipal();

  return (
    <Styled.Container>
      <Styled.List>
        {content.map((value, index) => (
          <Item key={index} {...value} />
        ))}
      </Styled.List>
      <Divider />
      {isLogin ? <FixedLink url={`/blog/user/${id}/posts`}>我的博客</FixedLink> : undefined}
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
