import React from 'react';
import { Header, Footer } from '@pingcap/pingcap-ui';
import { useRouter } from 'next/router';

import { headerNavItems } from './core.data';

const Core = ({ children }) => {
  const router = useRouter();

  const headerProps = {
    navItems: headerNavItems,

    onNavClick: ({ link }) => {
      if (link.startsWith('http')) {
        return window.open(link, '_blank');
      }
      router.push(link);
    },
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
