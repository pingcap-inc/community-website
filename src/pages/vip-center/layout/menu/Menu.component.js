import React, { useContext } from 'react';
import useSWR from 'swr';
import { Badge } from 'antd';
import { useRouter } from 'next/router';

import * as Styled from './menu.styled';
import { AuthContext } from '~/context';
import { redDots as redDotsUtils } from '~/utils';

const Menu = () => {
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);
  const { data: redDotsResp } = useSWR(isLoggedIn && 'operation.fetchRedDots');

  const { asPath } = router;

  const pathPrefix = '/vip-center';
  const routes = {
    '': '会员中心',
    '/redeem': '积分兑换',
    '/records': '积分记录',
    '/rules': '积分规则',
  };

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
