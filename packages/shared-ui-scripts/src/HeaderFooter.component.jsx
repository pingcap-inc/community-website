import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import useSWR from 'swr';
import { Header, Footer, UserProfile, createAppGlobalStyle, utils } from '@tidb-community/ui';
import { getData, api } from '@tidb-community/datasource';

import { AuthContext } from '../../../src/context';

import * as R from 'ramda';
import './global.less';

const GlobalStyle = createAppGlobalStyle();

const HeaderFooter = ({ locale, title, logoSrc, homeUrl = '/', hasMargin = true, footerEl }) => {
  const { login, logout } = useContext(AuthContext);

  const fetcher = (path, params) => {
    // SWR shallowly compares the arguments on every render, and triggers revalidation
    // if any of them has changed. Thus, if you'd like to pass an object as params to
    // the API call, you may use JSON.stringify to the object params to a string value.
    // Read more: https://swr.vercel.app/docs/arguments#passing-objects
    try {
      params = JSON.parse(params);
    } catch (err) {}

    return R.path(path.split('.'), api)(params);
  };
  const { data: meResp } = useSWR('me', fetcher, {
    revalidateOnFocus: false,
  });
  const meData = meResp?.data;

  const data = getData({
    domain: window.location.host,
    path: '',
    locale,
    meData,
  }).nav;
  const { navItems: headerNavItems, userProfileNavItems } = data.header;
  const { navItems: footerNavItems, icons: footerIcons } = data.footer;

  const logo = <img alt={title} src={logoSrc} />;

  const onNavClick = ({ link, isSelected }) => {
    if (isSelected) return;
    window.location.href = link;
  };

  const currentNav = utils.header.getCurrentNav(headerNavItems, window.location.pathname);

  const headerProps = {
    logo,
    title,
    onNavClick,
    navItems: headerNavItems,
    currentNav,
    onTitleClick: () => {
      window.location.href = homeUrl;
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
    <>
      <GlobalStyle />
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
          />
        }
      />
      {ReactDOM.createPortal(<Footer {...footerProps} />, footerEl)}
    </>
  );
};

export default HeaderFooter;
