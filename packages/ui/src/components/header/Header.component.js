import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Grid, Menu } from 'antd';

import * as Styled from './header.styled';
import { menuPopupId } from './header.constants';
import { menu as menuUtils } from '../../utils';

const { useBreakpoint } = Grid;

const Header = ({ currentNav, logo, navItems, onNavClick, onTitleClick, title = '', userProfileSlot }) => {
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
