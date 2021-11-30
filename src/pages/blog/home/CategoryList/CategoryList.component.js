import React from 'react';
import * as Styled from './index.styled';
import Link from 'next/link';
import { Divider } from 'antd';
import { useRouter } from 'next/router';
import { usePrincipal } from '../../blog.hooks';

const CategoryList = ({ categories: { content } }) => {
  const { isLogin, id, hasRole } = usePrincipal();
  const isEditor = hasRole('EDITOR');

  return (
    <Styled.Container>
      <Styled.List>
        {content.map((value, index) => (
          <Item key={index} {...value} />
        ))}
      </Styled.List>
      <Divider />
      {isEditor && <FixedLink url={`/blog/audits`}>待审核列表</FixedLink>}
      {isLogin && <FixedLink url={`/blog/user/${id}/posts`}>我的博客</FixedLink>}
      <FixedLink url={'/blog'}>博客发布指南</FixedLink>
      <FixedLink url={'/blog'}>隐私协议</FixedLink>
      <FixedLink url={'/blog'}>联系我们</FixedLink>
    </Styled.Container>
  );
};

const Item = ({ name, slug }) => {
  const { query } = useRouter();
  const url = slug === '' ? `/blog` : `/blog/category/${slug}`;
  const selected = (query.slug || '') === slug;
  return (
    <Link href={url}>
      <Styled.Item selected={selected}>{name}</Styled.Item>
    </Link>
  );
};

const FixedLink = ({ url, children }) => {
  return (
    <Link href={url}>
      <Styled.FixedLink>{children}</Styled.FixedLink>
    </Link>
  );
};

export default CategoryList;
