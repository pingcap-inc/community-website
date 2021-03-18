import React from 'react';
import { Menu } from 'antd';

import * as Styled from './header.styled';

const { SubMenu } = Menu;

const Header = () => (
  <Styled.Container>
    <Menu mode="horizontal">
      <SubMenu key="sub1" title="Navigation One">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
        <SubMenu key="sub2" title="Option 3">
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
      </SubMenu>
    </Menu>
  </Styled.Container>
);

export default Header;
