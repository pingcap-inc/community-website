import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import useSWR from 'swr';
import { ActivityBanner, Footer, Header, UserProfile, utils } from '@tidb-community/ui';
import { getData } from '@tidb-community/datasource';
import { useRouter } from 'next/router';

import * as Styled from './core.styled';
import { AuthContext, MeContext, NavContext } from '~/context';
import { link as linkUtils, redDots as redDotsUtils } from '~/utils';
import { boolean } from 'yup';

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

const ActivityBannerComponent = () => {
  return (
    <ActivityBanner
      // backgroundColor={'#2c2c2c'}
      style={{ backgroundImage: 'linear-gradient(to right, #6E545B, #2C2C2C, #6E545B)' }}
      text={
        <>
          <svg
            style={{ fill: '#FFF' }}
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8486"
            width="24"
            height="24"
          >
            <path
              d="M848 359.3H627.7L825.8 109c4.1-5.3 0.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3 0.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"
              p-id="8487"
            ></path>
          </svg>
          社区专栏全新上线~ 点击进来围观！
        </>
      }
      // backgroundImage={'https://tidb.io/images/activity/banner.svg'}
      // buttonImage={'https://tidb.io/images/activity/button.svg'}
      link={'https://tidb.io/blog'}
      // onClick={() => onNavClick({ link: 'https://tidb.io/blog', target: '_blank' })}
    />
  );
};

const Core = ({
  MainWrapper = Styled.Main,
  children,
  domain = 'tidb.io',
  hasMargin,
  locale = 'zh',
  backgroundColor,
}) => {
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

  const title = 'TiDB | COMMUNITY';
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

  const isBlogPage = router.pathname.startsWith('/blog');

  return (
    <NavContext.Provider value={{ navData: data, onNavClick, currentNav }}>
      <Styled.Container style={{ backgroundColor }}>
        {/*{renderActivityBanner({ meData, isMeValidating }, data.activity, onNavClick, router.pathname)}*/}
        {!isBlogPage && <ActivityBannerComponent />}
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
