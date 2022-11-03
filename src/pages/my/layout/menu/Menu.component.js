import React from 'react';
import useSWR from 'swr';
import {Badge} from 'antd';
import {useRouter} from 'next/router';

import * as Styled from './menu.styled';
import {redDots as redDotsUtils} from '~/utils';
import {useIsLoggedIn} from "~/hooks/account";

const Menu = () => {
  const router = useRouter();
  const isLoggedIn = useIsLoggedIn()
  const { data: redDotsResp } = useSWR(isLoggedIn && 'operation.fetchRedDots');

  const redDots = redDotsUtils.transformRespToMap(redDotsResp);
  const { asPath } = router;

  const genPath = (path) => `/my/${path}`;
  const profilePath = genPath('profile');
  const companyPath = genPath('company');
  const settingsPath = genPath('settings');

  const onClick = (path) => async () => {
    await router.push(path);
  };

  return (
    <Styled.Container>
      <Styled.Item isActive={asPath === profilePath} onClick={onClick(profilePath)}>
        个人信息
      </Styled.Item>
      <Styled.Item isActive={asPath === companyPath} onClick={onClick(companyPath)}>
        公司信息 {redDots.companyInfo && <Badge count="+20积分" />}
      </Styled.Item>
      <Styled.Item isActive={asPath === settingsPath} onClick={onClick(settingsPath)}>
        账号设置
      </Styled.Item>
    </Styled.Container>
  );
};

export default Menu;
