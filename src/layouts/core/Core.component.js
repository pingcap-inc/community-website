import * as R from 'ramda';
import React from 'react';
import { Header, Footer, data, utils } from '@tidb-community/ui';
import { useRouter } from 'next/router';

import { link as linkUtils } from 'utils';

const { navItems: headerNavItems } = data.header;
const { navItems: footerNavItems } = data.footer;

const Core = ({ children }) => {
  const router = useRouter();

  const title = 'Community';
  const logo = <img alt={title} src="/images/community/logo.svg" />;

  const onNavClick = R.curry(linkUtils.handleRedirect)(router);

  const headerProps = {
    logo,
    title,
    onNavClick,
    navItems: headerNavItems,
    currentNav: utils.header.getCurrentNav(headerNavItems, router.pathname),
    onTitleClick: () => router.push('/community'),
  };

  const footerProps = {
    logo,
    title,
    onNavClick,
    navItems: footerNavItems,
  };

  return (
    <>
      <Header {...headerProps} />
      {children}
      <Footer {...footerProps} />
    </>
  );
};

export default Core;
