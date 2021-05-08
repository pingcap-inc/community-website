import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Header, Footer, UserProfile, utils } from '@tidb-community/ui';
import { getData } from '@tidb-community/datasource';
import { useRouter } from 'next/router';

import { MeContext } from 'context';
import { link as linkUtils } from 'utils';

const Core = ({ children, domain = 'tug.tidb.io', hasMargin, locale = 'zh' }) => {
  const router = useRouter();
  const { meData } = useContext(MeContext);

  const data = getData({ domain, path: router.basePath, locale, meData }).nav;
  const { navItems: headerNavItems, userProfileNavItems } = data.header;
  const { navItems: footerNavItems, icons: footerIcons } = data.footer;

  const title = 'TiDB Community';
  const logo = <img alt={title} src="/images/community/logo.svg" />;

  const onNavClick = ({ link, browserLink, isSelected }) => {
    if (isSelected) return;
    linkUtils.handleRedirect(router, link, browserLink);
  };

  const currentNav = utils.header.getCurrentNav(headerNavItems, router.pathname);

  const headerProps = {
    logo,
    title,
    onNavClick,
    navItems: headerNavItems,
    currentNav: utils.header.getCurrentNav(headerNavItems, router.pathname),
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
    <>
      <Header
        {...headerProps}
        userProfileSlot={
          <UserProfile
            onNavClick={onNavClick}
            currentNav={currentNav}
            items={userProfileNavItems}
            avatarUrl={meData?.avatar_url}
            locale={locale}
          />
        }
      />
      {children}
      <Footer {...footerProps} />
    </>
  );
};

Core.propTypes = {
  domain: PropTypes.string,
  hasMargin: PropTypes.bool,
  locale: PropTypes.oneOf(['zh', 'en']),
};

export default Core;
