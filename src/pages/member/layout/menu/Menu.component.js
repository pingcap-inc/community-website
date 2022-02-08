import React from 'react';
import { useRouter } from 'next/router';

import * as Styled from './menu.styled';

const Menu = ({ isMobile }) => {
  const router = useRouter();

  const { asPath } = router;

  const pathPrefix = '/member';
  const routes = {
    '': '会员中心',
    '/redeem': '积分兑换',
    '/records': '积分记录',
    '/rules': '积分规则',
  };

  const handleMobileClick = (e) => {
    const { key } = e;
    router.push(key);
  };

  if (isMobile) {
    return (
      <Styled.MobileMenu mode="horizontal" selectedKeys={[asPath]} onClick={handleMobileClick}>
        {Object.keys(routes).map((path) => (
          <Styled.MobileMenu.Item key={pathPrefix + path}>{routes[path]}</Styled.MobileMenu.Item>
        ))}
      </Styled.MobileMenu>
    );
  }

  return (
    <Styled.Container>
      {Object.keys(routes).map((path) => (
        <Styled.Item
          isActive={asPath === pathPrefix + path}
          onClick={(e) => {
            e.preventDefault();
            router.push(pathPrefix + path);
          }}
        >
          {routes[path]}
        </Styled.Item>
      ))}
    </Styled.Container>
  );
};

export default Menu;
