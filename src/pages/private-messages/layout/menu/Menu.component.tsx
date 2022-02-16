import React from 'react';

import * as Styled from './menu.styled';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Menu = () => {
  const router = useRouter();
  // get the current page
  return (
    <Styled.Container>
      {list.map((item) => {
        const href = `/private-messages${item.key}`;
        return (
          <Link href={href}>
            <Styled.Item isActive={router.pathname === href}>{item.title}</Styled.Item>
          </Link>
        );
      })}
    </Styled.Container>
  );
};

interface MenuItemProps {
  key: string;
  title: string;
  isActive: boolean;
}

const list: MenuItemProps[] = [
  {
    key: '',
    title: '收件箱',
    isActive: false,
  },
  {
    key: '/sent',
    title: '已发送',
    isActive: false,
  },
];

export default Menu;
