import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import * as Styled from './index.styled';

const OrderBySwitch = ({ items }) => {
  return (
    <Styled.Container>
      <Styled.List>
        {items.map((value, index) => (
          <Item key={index} {...value} />
        ))}
      </Styled.List>
      <Styled.AllTag>
        <Link href={'blog/tag'}>全部标签</Link>
      </Styled.AllTag>
    </Styled.Container>
  );
};

const Item = ({ name, url }) => {
  const { asPath } = useRouter();
  const selected = asPath === url || asPath.startsWith(url + '?');
  return (
    <Link href={url}>
      <Styled.Item selected={selected}>{name}</Styled.Item>
    </Link>
  );
};

export default OrderBySwitch;
