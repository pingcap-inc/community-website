import React from 'react';
import * as Styled from './index.styled';
import Link from 'next/link';
import { Divider } from 'antd';

const allClassifications = [
  { name: '全部分类', url: 'blog', selected: true },
  { name: '原理解读', url: 'blog' },
];

const ClassificationList = ({}) => {
  return (
    <Styled.Container>
      <Styled.List>
        {allClassifications.map((item) => (
          <Item data={item} />
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

const Item = ({ data: { name, url, selected } }) => {
  return (
    <Link href={`/${url}`}>
      <Styled.Item selected={!!selected}>{name}</Styled.Item>
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

export default ClassificationList;
