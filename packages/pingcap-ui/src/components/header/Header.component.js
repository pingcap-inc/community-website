import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Menu } from 'antd';

import * as Styled from './header.styled';
import { menuPopupId } from './header.constants';

const { SubMenu } = Menu;

const genMenu = ({ items, onNavClick }) =>
  items.map((item) => {
    const { title, items, link } = item;

    if (items) {
      return (
        <SubMenu key={title} title={title}>
          {// eslint-disable-next-line no-unused-vars
          genMenu({ items, onNavClick })}
        </SubMenu>
      );
    }

    return (
      <Menu.Item key={title} onClick={(e) => onNavClick(link)}>
        {title}
      </Menu.Item>
    );
  });

const Header = ({ currentNav, logo, navItems, onNavClick, onTitleClick, title }) => {
  useEffect(() => {
    const el = document.createElement('div');
    el.id = menuPopupId;
    document.body.append(el);

    return () => {
      el.remove();
    };
  }, []);

  const menuProps = {
    mode: 'horizontal',
    selectedKeys: currentNav && [currentNav],
    getPopupContainer: () => document.getElementById(menuPopupId),
    triggerSubMenuAction: 'click',
  };

  return (
    <>
      <Styled.Container className="clearfix">
        <Styled.Logo onClick={onTitleClick}>
          {logo}
          {title}
        </Styled.Logo>

        <Styled.MenuWrapper>
          <Menu {...menuProps}>{genMenu({ items: navItems, onNavClick })}</Menu>
        </Styled.MenuWrapper>
      </Styled.Container>

      <Styled.GlobalStyle />
    </>
  );
};

Header.propTypes = {
  currentNav: PropTypes.string,
  logo: PropTypes.element.isRequired,
  navItems: PropTypes.array.isRequired,
  onNavClick: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
