import React from 'react';
import { Header, UserProfile, utils } from '@tidb-community/ui';
import { getData } from '@tidb-community/datasource';

import { getTitle } from '../utils';

export default {
  title: getTitle('Header'),
  component: Header,
};

const Template = ({ showUserProfile, locale, login, hasOrg, onNavClick }) => {
  const { navItems } = getData({ locale }).nav.header;
  const title = 'TiDB Community';
  const logo = <img alt={title} src='/images/community/logo.svg' />;
  const currentNav = utils.header.getCurrentNav(navItems, 'https://contributor.tidb.io/people/committer');

  const meData = login ? { org: hasOrg ? { slug: 'my-org' } : undefined } : undefined;

  return (
    <Header
      logo={logo}
      navItems={navItems}
      currentNav={currentNav}
      title={title}
      userProfileSlot={
        showUserProfile
          ? <UserProfile onNavClick={onNavClick} currentNav={currentNav} meData={meData} locale={locale} />
          : undefined
      }
    />
  );
};

export const WithNav = Template.bind({});

WithNav.args = {
  showUserProfile: false,
  locale: 'zh',
  login: false,
  hasOrg: false,
};
