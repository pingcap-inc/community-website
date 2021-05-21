import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Header, Footer, UserProfile, utils } from '@tidb-community/ui';
import { getData } from '@tidb-community/datasource';
import { useRouter } from 'next/router';

import * as Styled from './core.styled';
import { MeContext, NavContext } from 'context';
import { link as linkUtils } from 'utils';

const Core = ({ MainWrapper = Styled.Main, children, domain = 'tug.tidb.io', hasMargin, locale = 'zh' }) => {
  const router = useRouter();
  const { meData } = useContext(MeContext);
  const { login, logout } = useContext(NavContext);

  const data = getData({ domain, path: router.basePath, locale, meData }).nav;
  const { navItems: headerNavItems, userProfileNavItems, loginUrl, logoutUrl, homeUrl } = data.header;
  const { navItems: footerNavItems, icons: footerIcons } = data.footer;

  const title = 'TiDB Community';
  const logo = <img alt={title} src="/images/community/logo.svg" />;

  const onNavClick = ({ link, browserLink, isSelected, target }) => {
    if (isSelected) return;
    linkUtils.handleRedirect(router, link, browserLink, target);
  };

  const currentNav = utils.header.getCurrentNav(headerNavItems, router.pathname);

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
    <NavContext.Provider value={{ navData: data }}>
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

Core.propTypes = {
  // It belongs to an object type if MainWrapper is an styled component
  MainWrapper: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
  domain: PropTypes.string,
  hasMargin: PropTypes.bool,
  locale: PropTypes.oneOf(['zh', 'en']),
};

export default Core;
