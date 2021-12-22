import React from 'react';
import * as Styled from './index.styled';
import { Divider } from 'antd';
import { useRouter } from 'next/router';
import { usePrincipal } from '../../blog.hooks';
import Link from 'next/link';

const CategoryList = ({ categories: { content } }) => {
  const { isLogin, id, hasAuthority } = usePrincipal();
  const showAudits = hasAuthority('REVIEW_POST');

  return (
    <Styled.Container>
      <Styled.List>
        {content.map((value) => (
          <Item key={value.slug} {...value} />
        ))}
      </Styled.List>
      <Divider />
      <div>
        {showAudits && <NextLink href={`/blog/audits`}>待审核</NextLink>}
        {isLogin && <NextLink href={`/blog/user/${id}/posts`}>我的专栏</NextLink>}
        <FixedLink href={'https://asktug.com/t/topic/69773'}>专栏发布指南</FixedLink>
        <FixedLink href={'https://pingcap.com/zh/privacy-policy/'}>隐私协议</FixedLink>
        <FixedLink href={'mailto:community@tidb.io'}>联系我们</FixedLink>
      </div>
    </Styled.Container>
  );
};

const Item = ({ name, slug }) => {
  const { query } = useRouter();
  const url = slug === '' ? `/blog` : `/blog/c/${slug}`;
  const selected = (query.slug || '') === slug;
  return (
    <Link href={url} passHref>
      <Styled.Item selected={selected}>{name}</Styled.Item>
    </Link>
  );
};

const FixedLink = ({ href, children }) => {
  return (
    <Styled.FixedLink href={href} target="_blank" rel="noreferrer noopener">
      {children}
    </Styled.FixedLink>
  );
};

const NextLink = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <Styled.FixedLink>{children}</Styled.FixedLink>
    </Link>
  );
};

export default CategoryList;
