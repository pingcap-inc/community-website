import React, { useContext } from 'react';
import * as Styled from './index.styled';
import { Divider } from 'antd';
import { usePrincipal } from '../../blog.hooks';
import Link from 'next/link';
import { MeContext } from '~/context';

const CategoryList = ({ categories: { content }, shallow = false, current, type }) => {
  const { hasAuthority } = usePrincipal();
  const showAudits = hasAuthority('REVIEW_POST');

  const { meData, isMeValidating } = useContext(MeContext);

  return (
    <Styled.Container>
      <Styled.List>
        <Item key="" name="全部文章" slug="" active={type === 'all'} shallow={shallow} />
        {content.map((value) => (
          <Item key={value.slug} {...value} shallow={shallow} active={current === value.slug} />
        ))}
      </Styled.List>
      <Divider />
      {showAudits && <NextLink href={`/blog/audits`}>待审核</NextLink>}
      <div>
        {meData?.username && !isMeValidating && <FixedLink href={`/u/${meData?.username}`}>我的专栏</FixedLink>}
        <FixedLink href={'https://tidb.net/blog/66c5e81b'}>专栏发布指南</FixedLink>
        <FixedLink href={'https://cn.pingcap.com/privacy-policy/'}>隐私协议</FixedLink>
        {/*<FixedLink href={'mailto:community@tidb.io'}>联系我们</FixedLink>*/}
      </div>
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
