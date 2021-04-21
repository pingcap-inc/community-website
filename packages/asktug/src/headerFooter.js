import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { getData } from '@tidb-community/datasource';
import { Footer, Header, constants, createAppGlobalStyle, utils, mixins } from '@tidb-community/ui';

import 'antd-global.css';
import './headerFooter.scss';

const { appClassName } = constants;

const data = getData({
  domain: 'asktug.com',
  locale: 'zh',
}).nav;
const { navItems: headerNavItems } = data.header;
const { navItems: footerNavItems, icons: footerIcons } = data.footer;

const title = 'TiDB Community';
const onNavClick = (link) => window.open(link, '_blank').focus();

const HeaderLogo = styled.img.attrs({
  alt: 'AskTUG',
  src: 'https://asktug.com/uploads/default/original/3X/4/2/42424ddde1f860052cf29097bbfa44312d111b1d.png',
})`
  && {
    ${mixins.size('146px', '55px')};
  }
`;

const headerProps = {
  logo: <HeaderLogo />,
  onNavClick,
  navItems: headerNavItems,
  currentNav: utils.header.getCurrentNav(headerNavItems, window.location.pathname),
  onTitleClick: () => {
    window.location.href = 'https://asktug.com';
  },
};

const footerProps = {
  logo: <img alt={title} src="https://tidb.io/images/community/logo.svg" />,
  title,
  onNavClick,
  icons: footerIcons,
  navItems: footerNavItems,
};

const GlobalStyle = createAppGlobalStyle();
const headerElem = document.getElementById('asktug-header');

headerElem.classList.add(appClassName);
ReactDOM.render(
  <>
    <Header {...headerProps} />
    <GlobalStyle />
  </>,
  headerElem
);

const footerId = 'asktug-footer';
const MutationObserver = window.MutationObserver || window.WebkitMutationObserver;

const observer = new MutationObserver((mutations) => {
  mutations.forEach(function(mutation) {
    mutation.addedNodes.forEach(function(node) {
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
