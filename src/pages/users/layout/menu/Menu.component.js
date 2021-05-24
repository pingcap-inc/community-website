import React from 'react';
import { useRouter } from 'next/router';

import * as Styled from './menu.styled';

const Menu = () => {
  const router = useRouter();
  const {
    asPath,
    query: { uid },
  } = router;

  const genPath = (path) => `/users/${uid}/${path}`;
  const profilePath = genPath('profile');
  const companyPath = genPath('company');
  const settingsPath = genPath('settings');

  const onClick = (path) => (e) => {
    router.push(path);
  };

  return (
    <Styled.Container>
      <Styled.Item isActive={asPath === profilePath} onClick={onClick(profilePath)}>
        个人信息
      </Styled.Item>
      <Styled.Item isActive={asPath === companyPath} onClick={onClick(companyPath)}>
        公司信息
      </Styled.Item>
      <Styled.Item isActive={asPath === settingsPath} onClick={onClick(settingsPath)}>
        账号设置
      </Styled.Item>
    </Styled.Container>
  );
};

export default Menu;
