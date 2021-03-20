import PropTypes from 'prop-types';
import React from 'react';
import { Menu } from 'antd';

import * as Styled from './header.styled';

const { SubMenu } = Menu;

const Header = ({ logo, title, navItems, onTitleClick, onNavClick }) => {
  const genMenu = (items) =>
    items.map((item) => {
      const { title, items } = item;

      if (items) {
        return (
          <SubMenu key={title} title={title}>
            {
              // eslint-disable-next-line no-unused-vars
              genMenu(items)
            }
          </SubMenu>
        );
      }

      return (
        <Menu.Item key={title} onClick={(e) => onNavClick(item)}>
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
      <Styled.Menu>{genMenu(navItems)}</Styled.Menu>
    </Styled.Container>
  );
};

Header.propTypes = {
  logo: PropTypes.element.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  title: PropTypes.string,
  navItems: PropTypes.array.isRequired,
  onNavClick: PropTypes.func.isRequired,
};

export default Header;
