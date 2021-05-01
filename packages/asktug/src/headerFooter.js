import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Footer, Header, constants, createAppGlobalStyle, mixins } from '@tidb-community/ui';
import { getData } from '@tidb-community/datasource';

import 'antd-global.css';
import './headerFooter.scss';

const { location } = window;
const { appClassName } = constants;

const data = getData({
  domain: 'asktug.com',
  locale: 'zh',
}).nav;
const { navItems: headerNavItems } = data.header;
const { navItems: footerNavItems, icons: footerIcons } = data.footer;

const baseURL = 'https://asktug.com';
const title = 'TiDB Community';

const onNavClick = ({ link }) => {
  if (link.startsWith('http')) {
    window.open(link, '_blank').focus();
  } else {
    location.href = link;
  }
};

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
  currentNav: '问答',
  onTitleClick: () => {
    location.href = baseURL;
  },
};

const footerProps = {
  logo: <img alt={title} src="https://tidb.io/images/community/logo.svg" />,
  title,
  onNavClick: (link) => onNavClick({ link }),
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
