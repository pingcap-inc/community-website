import React from 'react';
import * as Styled from './index.styled';
import Link from 'next/link';

const orderBy = [
  { name: '推荐排序', url: 'blog', selected: true },
  { name: '时间排序', url: 'blog' },
];

const OrderBySwitch = () => {
  return (
    <Styled.Container>
      <Styled.List>
        {orderBy.map((item) => (
          <Item {...item} />
        ))}
      </Styled.List>
      <Styled.AllTag>
        <Link href={'blog/tag'}>全部标签</Link>
      </Styled.AllTag>
    </Styled.Container>
  );
};

const Item = ({ name, url, selected }) => {
  return (
    <Link href={`/${url}`}>
      <Styled.Item selected={!!selected}>{name}</Styled.Item>
    </Link>
  );
};

export default OrderBySwitch;
