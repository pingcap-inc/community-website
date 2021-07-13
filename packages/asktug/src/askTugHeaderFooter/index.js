import * as R from 'ramda';
import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import useSWR from 'swr';
import { Footer, Header, constants, createAppGlobalStyle, ActivityBanner } from '@tidb-community/ui';
import { getData, api } from '@tidb-community/datasource';

import 'antd-global.css';
import './index.scss';

import * as Styled from './index.styled';
import HackUserProfileSlot from './hackUserProfileSlot.component';
import gonganIcon from './gongan.png';
import { MeContext } from '@/context/me.context';

const { location } = window;
const { appClassName } = constants;

const baseURL = 'https://asktug.com';
const title = 'TiDB Community';

const { nav } = getData({
  domain: 'asktug.com',
  locale: 'zh',
  env: process.env.NEXT_PUBLIC_RUNTIME_ENV,
});

const onNavClick = ({ link }) => {
  if (link.startsWith('http')) {
    window.open(link, '_blank').focus();
  } else {
    location.href = link;
  }
};

const GlobalStyle = createAppGlobalStyle();
const headerElem = document.getElementById('asktug-header');

const AskTugHeaderWrapper = ({ children }) => {
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

  const {
    data: meResp,
    mutate: mutateMe,
    isValidating: isMeValidating,
  } = useSWR('me', fetcher, {
    revalidateOnFocus: false,
  });

  useEffect(() => {
    const handler = () => mutateMe();
    window.addEventListener('popstate', handler);
    return () => {
      window.removeEventListener('popstate', handler);
    };
  }, [mutateMe]);

  return <MeContext.Provider value={{ meData: meResp?.data, mutateMe, isMeValidating }}>{children}</MeContext.Provider>;
};

const ActivityBannerComponent = () => {
  const { meData } = useContext(MeContext);
  // Don't render the banner if the user is alreay in an org
  if (meData?.org) return null;

  const { link, ...data } = nav.activity;
  return <ActivityBanner {...data} onClick={() => onNavClick({ link })} />;
};

const HeaderComponent = () => {
  const { meData } = useContext(MeContext);

  const data = getData({
    domain: 'asktug.com',
    locale: 'zh',
    env: process.env.NEXT_PUBLIC_RUNTIME_ENV,
    meData,
  }).nav;
  const { navItems: headerNavItems, userProfileNavItems } = data.header;

  let navItems = [];

  if (meData) {
    navItems = (userProfileNavItems || []).filter(({ title }) => title.indexOf('团队') >= 0);
  }

  if (navItems.length > 1) {
    navItems = [
      {
        title: '我的团队',
        items: navItems,
        badge: navItems.filter(({ badge }) => badge).length > 0,
      },
    ];
  }

  const headerProps = {
    logo: <Styled.HeaderLogo />,
    onNavClick,
    navItems: headerNavItems.concat(navItems),
    currentNav: '问答',
    onTitleClick: () => {
      location.href = baseURL;
    },
    userProfileSlot: <HackUserProfileSlot />,
  };

  return <Header {...headerProps} />;
};

headerElem.classList.add(appClassName);
ReactDOM.render(
  <AskTugHeaderWrapper>
    <ActivityBannerComponent />
    <HeaderComponent />
    <GlobalStyle />
  </AskTugHeaderWrapper>,
  headerElem
);

const { navItems: footerNavItems, icons: footerIcons } = nav.footer;

const footerProps = {
  logo: <img alt={title} src="https://tidb.io/images/community/logo.svg" />,
  title,
  onNavClick: (link) => onNavClick({ link }),
  icons: footerIcons,
  navItems: footerNavItems,
  bottomBar: (
    <Styled.BottomBarContainer
      target="_blank"
      href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802035239"
    >
      <img alt="" src={gonganIcon} />
      公安部备案号：11010802035239
    </Styled.BottomBarContainer>
  ),
};

const footerId = 'asktug-footer';
const MutationObserver = window.MutationObserver || window.WebkitMutationObserver;

const observer = new MutationObserver((mutations) => {
  mutations.forEach(function (mutation) {
    mutation.addedNodes.forEach(function (node) {
      if (node.id === footerId) {
        const footerElem = document.getElementById(footerId);
        footerElem.classList.add(appClassName);
        ReactDOM.render(<Footer {...footerProps} />, footerElem);
      }
    });
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
