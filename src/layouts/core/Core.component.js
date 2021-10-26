import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import useSWR from 'swr';
import { Footer, Header, UserProfile, utils } from '@tidb-community/ui';
import { getData } from '@tidb-community/datasource';
import { useRouter } from 'next/router';

import * as Styled from './core.styled';
import { AuthContext, MeContext, NavContext } from '~/context';
import { link as linkUtils, redDots as redDotsUtils } from '~/utils';

// disabled for operation reasons
// const renderActivityBanner = ({ meData, isMeValidating }, { link, ...data }, onNavClick, currentPathname) => {
//   // do not render if:
//   // - already in org
//   // - meData is validating
//   // - already at the page
//   if (meData?.org || isMeValidating || currentPathname === link) {
//     return undefined;
//   }
//
//   return <ActivityBanner {...data} onClick={() => onNavClick({ link, target: '_blank' })} />;
// };

const Core = ({ MainWrapper = Styled.Main, children, domain = 'tidb.io', hasMargin, locale = 'zh' }) => {
  const router = useRouter();
  const { login, logout, isLoggedIn } = useContext(AuthContext);
  const { meData /*isMeValidating*/ } = useContext(MeContext);
  const { data: redDotsResp } = useSWR(isLoggedIn && 'operation.fetchRedDots');

  const redDots = redDotsUtils.transformRespToMap(redDotsResp);
  const data = getData({
    domain,
    path: router.basePath,
    locale,
    meData,
    redDots,
  }).nav;
  const { navItems: headerNavItems, userProfileNavItems } = data.header;
  const { navItems: footerNavItems, icons: footerIcons } = data.footer;

  const title = 'TiDB Community';
  const logo = <img alt={title} src="/images/tidb-logo.svg" />;

  const onNavClick = ({ link, browserLink, isSelected, target }) => {
    if (isSelected) return;
    linkUtils.handleRedirect(router, link, { as: browserLink, target });
  };

  const currentNav = utils.header.getCurrentNav(headerNavItems, router.asPath);

  const headerProps = {
    logo,
    title,
    onNavClick,
    navItems: headerNavItems,
    currentNav,
    onTitleClick: () => {
      document.location.href = process.env.NEXT_PUBLIC_HOME_URL;
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
    <NavContext.Provider value={{ navData: data, onNavClick, currentNav }}>
      <Styled.Container>
        {/*{renderActivityBanner({ meData, isMeValidating }, data.activity, onNavClick, router.pathname)}*/}
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
        <MainWrapper>{children}</MainWrapper>
        <Footer {...footerProps} />
      </Styled.Container>
    </NavContext.Provider>
  );
};

Core.propTypes = {
  // It belongs to an object type if MainWrapper is a styled component
  MainWrapper: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
  children: PropTypes.node,
  domain: PropTypes.string,
  hasMargin: PropTypes.bool,
  locale: PropTypes.oneOf(['zh', 'en']),
};

export default Core;
