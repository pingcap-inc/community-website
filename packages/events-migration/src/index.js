import React from 'react';
import ReactDOM from 'react-dom';

import { Header, Footer, UserProfile, createAppGlobalStyle, utils } from '@tidb-community/ui';
import { getData, api } from '@tidb-community/datasource';

import useSWR from 'swr';
import * as R from 'ramda';
import './global.less';

const REG_AUTH_PATH = /https?:\/\/([^/]+)\/(?:account|orgs)\//;
const loginUrl = 'https://accounts.pingcap.com/login';
const logoutUrl = 'https://accounts.pingcap.com/logout';
const homeUrl = 'https://tidb.io/';

const doLogin = (redirectUrl) => {
  window.open(`${loginUrl}?redirect_to=${encodeURIComponent(redirectUrl ?? window.window.location.href)}`, '_top');
};

const doLogout = (redirectUrl) => {
  redirectUrl = redirectUrl ?? window.window.location.href;
  let url;
  // do not redirect back to needs-login pages
  if (REG_AUTH_PATH.test(redirectUrl)) {
    if (!/^http/.test(homeUrl)) {
      url = `${window.window.location.protocol}//${window.window.location.hostname}${
        window.window.location.port ? `:${window.window.location.port}` : ''
      }${homeUrl}`;
    } else {
      url = homeUrl;
    }
  } else {
    url = redirectUrl;
  }
  window.open(`${logoutUrl}?redirect_to=${encodeURIComponent(url)}`, '_top');
};

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

const GlobalStyle = createAppGlobalStyle();

const Page = () => {
  const locale = 'zh';

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

  const onNavClick = ({ link, isSelected }) => {
    if (isSelected) return;
    window.location.href = link;
  };

  const currentNav = utils.header.getCurrentNav(headerNavItems, window.location.pathname);

  const title = 'TiDB Community';
  const logo = <img src="https://tidb.io/images/community/logo.svg" />;
  const headerProps = {
    logo,
    title,
    onNavClick,
    navItems: headerNavItems,
    currentNav,
    onTitleClick: () => {
      document.window.location.href = '/';
    },
  };
  const footerProps = {
    logo,
    title,
    onNavClick: (link) => onNavClick({ link }),
    navItems: footerNavItems,
    icons: footerIcons,
    hasMargin: true,
  };

  return (
    <>
      <GlobalStyle />
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
      {ReactDOM.createPortal(<Footer {...footerProps} />, document.querySelector('#footer'))}
    </>
  );
};

ReactDOM.render(<Page />, document.querySelector('#header'));
