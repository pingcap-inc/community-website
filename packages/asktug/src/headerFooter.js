import ReactDOM from 'react-dom';
import { Header, data } from '@tidb-community/ui';

(() => {
  const { navItems: headerNavItems } = data.header;
  const baseUrl = 'https://tidb.io';
  const title = 'Community';
  const logo = <img alt={title} src={`${baseUrl}/images/community/logo.svg`} />;

  const headerProps = {
    logo,
    title,
    onNavClick: console.log,
    navItems: headerNavItems,
    onTitleClick: () => window.open(baseUrl, '_blank').focus(),
  };

  ReactDOM.render(<Header {...headerProps} />, document.getElementById('asktug-header'));
})();
