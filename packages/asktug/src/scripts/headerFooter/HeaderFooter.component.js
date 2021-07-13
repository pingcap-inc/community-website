import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import useSWR from 'swr';
import { Header, Footer, UserProfile, createAppGlobalStyle, utils } from '@tidb-community/ui';
import { getData } from '@tidb-community/datasource';

import { AuthContext } from '@/context/auth.context';
import { fetcher } from '~/utils';

const GlobalStyle = createAppGlobalStyle();

const HeaderFooter = ({
  footerEl,
  hasMargin = false,
  homeUrl = 'https://tidb.io',
  locale = 'zh',
  logoUrl = 'https://tidb.io/images/community/logo.svg',
  title = 'TiDB Community',
}) => {
  const { login, logout } = useContext(AuthContext);
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

  const logo = <img alt={title} src={logoUrl} />;

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
            avatarUrl={meData?.avatar_url}
            currentNav={currentNav}
            items={userProfileNavItems}
            locale={locale}
            onLoginClick={() => login()}
            onLogoutClick={() => logout()}
            onNavClick={onNavClick}
          />
        }
      />
      {ReactDOM.createPortal(<Footer {...footerProps} />, footerEl)}
    </>
  );
};

export default HeaderFooter;
