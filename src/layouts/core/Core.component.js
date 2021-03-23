import React from 'react';
import { Header, Footer, data, utils } from '@pingcap/pingcap-ui';
import { useRouter } from 'next/router';

const { navItems: headerNavItems } = data.header;
const { navItems: footerNavItems } = data.footer;

const Core = ({ children }) => {
  const router = useRouter();

  const title = 'Community';
  const logo = <img alt={title} src="/images/community/logo.svg" />;

  const onNavClick = link => {
    if (!link) return;
    if (link.startsWith('http')) {
      return window.open(link, '_blank');
    }
    router.push(link);
  };

  const headerProps = {
    logo,
    title,
    onNavClick,
    navItems: headerNavItems,
    currentNav: utils.header.getCurrentNav(headerNavItems, router.pathname),
    onTitleClick: () => router.push('/community')
  };

  const footerProps = {
    logo,
    title,
    onNavClick,
    navItems: footerNavItems
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
