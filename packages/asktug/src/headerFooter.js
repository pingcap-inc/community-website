import * as R from 'ramda';
import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import useSWR from 'swr';
import { Footer, Header, constants, createAppGlobalStyle, mixins, ActivityBanner } from '@tidb-community/ui';
import { getData, api } from '@tidb-community/datasource';

import 'antd-global.css';
import './headerFooter.scss';
import { HackUserProfileSlot } from './hackHeader';
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

  const HeaderLogo = styled.img.attrs({
    alt: 'AskTUG',
    src: 'https://asktug.com/uploads/default/original/3X/4/2/42424ddde1f860052cf29097bbfa44312d111b1d.png',
  })`
    && {
      ${mixins.size('146px', '55px')};
    }
  `;

  let navItems = [];

  if (meData) {
    navItems = (userProfileNavItems || []).filter(({ title }) => title.indexOf('团队') >= 0);
  }

  if (!R.isEmpty(navItems)) {
    navItems = [
      {
        title: '我的团队',
        items: navItems,
        badge: navItems.filter(({ badge }) => badge).length > 0 ? 1 : 0,
      },
    ];
  }

  const headerProps = {
    logo: <HeaderLogo />,
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
