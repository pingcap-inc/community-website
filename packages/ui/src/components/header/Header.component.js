import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Grid, Menu } from 'antd';

import * as Styled from './header.styled';
import { menu as menuUtils } from '../../utils';
import { menuPopupId } from './header.constants';

const { useBreakpoint } = Grid;

const Header = ({ currentNav, logo, navItems, onNavClick, onTitleClick, title = '', userProfileSlot }) => {
  const bp = useBreakpoint();

  useEffect(() => {
    const el = document.createElement('div');
    el.id = menuPopupId;
    document.body.appendChild(el);

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
        <Styled.Content xs={bp.xs}>
          <Styled.Logo onClick={onTitleClick} xs={bp.xs}>
            {logo}
            {title}
          </Styled.Logo>

          <Styled.MenuWrapper xs={bp.xs}>
            <Menu {...menuProps}>{menuUtils.genMenu({ items: navItems, currentNav, onNavClick })}</Menu>
          </Styled.MenuWrapper>

          {userProfileSlot && <Styled.UserProfileContainer>{userProfileSlot}</Styled.UserProfileContainer>}
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
  userProfileSlot: PropTypes.node,
};

export default Header;
