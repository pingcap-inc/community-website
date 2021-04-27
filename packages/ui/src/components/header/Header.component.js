import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Grid, Menu } from 'antd';

import * as Styled from './header.styled';
import { menuPopupId } from './header.constants';
import { HiddenMenuItem } from './header.styled';

const { useBreakpoint } = Grid;
const { SubMenu } = Menu;

const genMenu = ({ items, currentNav, onNavClick }) => {
  const onItemClick = (link, browserLink) => (e) => {
    onNavClick(link, e.item.props.isSelected, browserLink);
  };

  return items.map((item) => {
    const { title, items, link, browserLink } = item;

    if (items) {
      const onSubMenuClick = () => {
        onNavClick(link, currentNav === title, browserLink);
      };

      const subMenuProps = {
        key: title,
        title: link ? <span onClick={onSubMenuClick}>{title}</span> : title,
      };

      return (
        <SubMenu {...subMenuProps}>
          {link ? <HiddenMenuItem key={title} onClick={onItemClick(link, browserLink)} /> : undefined}
          {
            // eslint-disable-next-line no-unused-vars
            genMenu({ items, onNavClick })
          }
        </SubMenu>
      );
    }

    return (
      <Menu.Item key={title} onClick={onItemClick(link, browserLink)}>
        {title}
      </Menu.Item>
    );
  });
};

const Header = ({ currentNav, logo, navItems, onNavClick, onTitleClick, title = '' }) => {
  const bp = useBreakpoint();

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
  };

  return (
    <>
      <Styled.Container>
        <Styled.Content>
          <Styled.Logo onClick={onTitleClick}>
            {logo}
            {title}
          </Styled.Logo>

          <Styled.MenuWrapper xs={bp.xs}>
            <Menu {...menuProps}>{genMenu({ items: navItems, currentNav, onNavClick })}</Menu>
          </Styled.MenuWrapper>
        </Styled.Content>
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
  title: PropTypes.string,
};

export default Header;
