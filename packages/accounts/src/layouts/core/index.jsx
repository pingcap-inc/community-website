import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Header, Footer, UserProfile, utils } from '@tidb-community/ui';
import { getData } from '@tidb-community/datasource';

import { AuthContext, MeContext, NavContext } from '@/context';
import * as Styled from './core.styled';

const CoreLayout = ({ MainWrapper = Styled.Main, children, domain = 'tidb.io', hasMargin = true, locale = 'zh' }) => {
  const { meData } = useContext(MeContext);
  const { login, logout } = useContext(AuthContext);

  const { location } = window;
  const data = getData({ domain, path: location.origin, locale, meData }).nav;
  const { navItems: headerNavItems, userProfileNavItems } = data.header;
  const { navItems: footerNavItems, icons: footerIcons } = data.footer;

  const title = 'TiDB Community';
  const logo = <img alt={title} src="/images/community/logo.svg" />;

  const onNavClick = ({ link, browserLink, isSelected, target }) => {
    if (isSelected) return;
    // linkUtils.handleRedirect(router, link, browserLink, target);
  };

  const currentNav = utils.header.getCurrentNav(headerNavItems, location.origin);

  const headerProps = {
    logo,
    title,
    onNavClick,
    navItems: headerNavItems,
    currentNav,
    onTitleClick: () => {
      document.location.href = 'https://tidb.io';
    },
  };

  const footerProps = {
    logo,
    title,
    onNavClick: (link) => onNavClick({ link }),
    navItems: footerNavItems,
    icons: footerIcons,
    hasMargin,
  };

  return (
    <NavContext.Provider value={{ navData: data, onNavClick, currentNav }}>
      <Styled.Container>
        <Header
          {...headerProps}
          userProfileSlot={
            <UserProfile
              onNavClick={onNavClick}
              onLoginClick={() => login()}
              onLogoutClick={() => logout()}
              currentNav={currentNav}
              items={userProfileNavItems}
              avatarUrl={meData?.avatar_url}
              locale={locale}
              showBadge={meData?.org_invitations.reduce((pre, cur) => pre + (cur.valid ? 1 : 0), 0) > 0}
            />
          }
        />
        <MainWrapper>{children}</MainWrapper>
        <Footer {...footerProps} />
      </Styled.Container>
    </NavContext.Provider>
  );
};

CoreLayout.propTypes = {
  // It belongs to an object type if MainWrapper is a styled component
  MainWrapper: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
  children: PropTypes.node,
  domain: PropTypes.string,
  hasMargin: PropTypes.bool,
  locale: PropTypes.oneOf(['zh', 'en']),
};

export default CoreLayout;
