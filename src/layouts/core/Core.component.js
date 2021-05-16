import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Header, Footer, UserProfile, utils } from '@tidb-community/ui';
import { getData } from '@tidb-community/datasource';
import { useRouter } from 'next/router';

import * as Styled from './core.styled';
import { MeContext, NavContext } from 'context';
import { link as linkUtils } from 'utils';

const REG_AUTH_PATH = /https?:\/\/([^/]+)\/(?:account|orgs)\//;

const Core = ({ MainWrapper = Styled.Main, children, domain = 'tug.tidb.io', hasMargin, locale = 'zh' }) => {
  const router = useRouter();
  const { meData } = useContext(MeContext);

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

  const doLogin = (redirectUrl) => {
    window.open(`${loginUrl}?redirect_to=${encodeURIComponent(redirectUrl ?? window.location.href)}`, '_top');
  };

  const doLogout = (redirectUrl) => {
    redirectUrl = redirectUrl ?? window.location.href;
    let url;
    // do not redirect back to needs-login pages
    if (REG_AUTH_PATH.test(redirectUrl)) {
      if (!/^http/.test(homeUrl)) {
        url = `${window.location.protocol}//${window.location.hostname}${
          window.location.port ? `:${window.location.port}` : ''
        }${homeUrl}`;
      } else {
        url = homeUrl;
      }
    } else {
      url = redirectUrl;
    }
    window.open(`${logoutUrl}?redirect_to=${encodeURIComponent(url)}`, '_top');
  };

  return (
    <NavContext.Provider value={{ navData: data, login: doLogin, logout: doLogout }}>
      <Styled.Container>
        <Header
          {...headerProps}
          userProfileSlot={
            <UserProfile
              onNavClick={onNavClick}
              onLoginClick={() => doLogin()}
              onLogoutClick={() => doLogout()}
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
