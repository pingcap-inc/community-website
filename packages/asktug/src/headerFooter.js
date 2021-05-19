import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Footer, Header, constants, createAppGlobalStyle, mixins } from '@tidb-community/ui';
import { getData, api } from '@tidb-community/datasource';

import 'antd-global.css';
import './headerFooter.scss';

const { location } = window;
const { appClassName } = constants;

const baseURL = 'https://asktug.com';
const title = 'TiDB Community';

const onNavClick = ({ link }) => {
  if (link.startsWith('http')) {
    window.open(link, '_blank').focus();
  } else {
    location.href = link;
  }
};

const GlobalStyle = createAppGlobalStyle();
const headerElem = document.getElementById('asktug-header');

const HeaderComponent = () => {
  const [meData, setMeData] = useState();

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

  useEffect(() => {
    const reload = () =>
      api
        .me()
        .then(({ data }) => setMeData(data))
        .catch(() => {});
    reload();

    window.addEventListener('popstate', reload);
  }, []);

  let navItems = [];

  if (meData) {
    navItems = (userProfileNavItems || []).filter(({ title }) => title.indexOf('团队') >= 0);
  }

  if (navItems) {
    if (navItems.length > 1) {
      navItems = [
        {
          title: '我的团队',
          items: navItems,
          badge: navItems.filter(({ badge }) => badge).length > 0,
        },
      ];
    }
  }

  const headerProps = {
    logo: <HeaderLogo />,
    onNavClick,
    navItems: headerNavItems.concat(navItems),
    currentNav: '问答',
    onTitleClick: () => {
      location.href = baseURL;
    },
  };

  return <Header {...headerProps} />;
};

headerElem.classList.add(appClassName);
ReactDOM.render(
  <>
    <HeaderComponent />
    <GlobalStyle />
  </>,
  headerElem
);

const { navItems: footerNavItems, icons: footerIcons } = getData({
  domain: 'asktug.com',
  locale: 'zh',
}).nav.footer;

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
