import React from 'react';

import * as Styled from './menu.styled';

const Menu = () => (
  <Styled.Container>
    <Styled.Item>个人信息</Styled.Item>
    <Styled.Item>公司信息</Styled.Item>
    <Styled.Item>账号设置</Styled.Item>
  </Styled.Container>
);

export default Menu;
