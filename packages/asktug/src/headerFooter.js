import React from 'react';
import ReactDOM from 'react-dom';
import { getData } from '@tidb-community/datasource';
import { Footer, Header, constants, createAppGlobalStyle, utils } from '@tidb-community/ui';

import 'antd-global.css';
import './headerFooter.scss';

const { appClassName } = constants;
const data = getData({
  domain: 'asktug.com',
  locale: 'zh',
}).nav;
const { navItems: headerNavItems } = data.header;
const { navItems: footerNavItems, icons: footerIcons } = data.footer;

const baseUrl = 'https://tidb.io';
const title = 'TiDB Community';
const logo = <img alt={title} src={`${baseUrl}/images/community/logo.svg`} />;
const onNavClick = (link) => window.open(link, '_blank').focus();

const headerProps = {
  logo,
  title,
  onNavClick,
  navItems: headerNavItems,
  currentNav: utils.header.getCurrentNav(headerNavItems, window.location.pathname),
  onTitleClick: () => onNavClick(baseUrl),
};

const footerProps = {
  logo,
  title,
  onNavClick,
  navItems: footerNavItems,
  icons: footerIcons,
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
