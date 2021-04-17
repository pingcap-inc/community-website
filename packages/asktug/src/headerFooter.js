import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Footer, Header, constants, createAppGlobalStyle, getData, utils } from '@tidb-community/ui';

import './headerFooter.scss';

const { appClassName } = constants;
const data = getData('asktug.com', '', 'cn');
const { navItems: headerNavItems } = data.header;
const { navItems: footerNavItems } = data.footer;

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

window.addEventListener('load', () => {
  const footerElem = document.getElementById('asktug-footer');
  footerElem.classList.add(appClassName);
  ReactDOM.render(<Footer {...footerProps} />, footerElem);
});
