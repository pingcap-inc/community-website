import PropTypes from 'prop-types';
import React from 'react';
import { Menu } from 'antd';

import * as Styled from './header.styled';

const { SubMenu } = Menu;

const Header = ({ currentNav, logo, navItems, onNavClick, onTitleClick, title }) => {
  const genMenu = items =>
    items.map(item => {
      const { title, items } = item;

      if (items) {
        return (
          <SubMenu key={title} title={title}>
            {// eslint-disable-next-line no-unused-vars
            genMenu(items)}
          </SubMenu>
        );
      }

      return (
        <Menu.Item key={title} onClick={e => onNavClick(item)}>
          {title}
        </Menu.Item>
      );
    });

  return (
    <Styled.Container>
      <Styled.Title onClick={onTitleClick}>
        <Styled.Logo>
          {logo}
          {title}
        </Styled.Logo>
      </Styled.Title>
      <Styled.Menu selectedKeys={currentNav && [currentNav]}>{genMenu(navItems)}</Styled.Menu>
    </Styled.Container>
  );
};

Header.propTypes = {
  currentNav: PropTypes.string,
  logo: PropTypes.element.isRequired,
  navItems: PropTypes.array.isRequired,
  onNavClick: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  title: PropTypes.string
};

export default Header;
