import React from 'react';
import { Header, Footer, data, utils } from '@pingcap/pingcap-ui';
import { useRouter } from 'next/router';

const { navItems } = data.header;

const Core = ({ children }) => {
  const router = useRouter();

  const title = 'Community';

  const headerProps = {
    title,
    navItems,
    logo: <img alt={title} src="/images/community/logo.svg" />,
    currentNav: utils.header.getCurrentNav(navItems, router.pathname),

    onTitleClick: () => router.push('/community'),

    onNavClick: ({ link }) => {
      if (link.startsWith('http')) {
        return window.open(link, '_blank');
      }
      router.push(link);
    }
  };

  return (
    <>
      <Header {...headerProps} />
      {children}
      <Footer />
    </>
  );
};

export default Core;
