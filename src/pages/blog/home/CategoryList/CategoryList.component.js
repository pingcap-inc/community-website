import React from 'react';
import * as Styled from './index.styled';
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
      {isLogin && <FixedLink url={`/blog/user/${id}/posts`}>我的专栏</FixedLink>}
      <FixedLink url={'https://asktug.com/t/topic/69773'}>专栏发布指南</FixedLink>
      <FixedLink url={'https://pingcap.com/zh/privacy-policy/'}>隐私协议</FixedLink>
      <FixedLink url={'mailto:community@tidb.io'}>联系我们</FixedLink>
    </Styled.Container>
  );
};

const Item = ({ name, slug }) => {
  const { query } = useRouter();
  const url = slug === '' ? `/blog` : `/blog/c/${slug}`;
  const selected = (query.slug || '') === slug;
  return (
    <Styled.Item href={url} selected={selected}>
      {name}
    </Styled.Item>
  );
};

const FixedLink = ({ url, children }) => {
  return (
    <Styled.FixedLink href={url} target="_blank" rel="noreferrer noopener">
      {children}
    </Styled.FixedLink>
  );
};

export default CategoryList;
