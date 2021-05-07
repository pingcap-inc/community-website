import React from 'react';
import { Header, UserProfile, utils } from '@tidb-community/ui';
import { getData } from '@tidb-community/datasource';

import { getTitle } from '../utils';

export default {
  title: getTitle('Header'),
  component: Header,
};

const Template = ({ showUserProfile, locale, login, hasOrg, onNavClick, avatarUrl }) => {
  let meData;
  if (login) {
    meData = {
      avatar_url: avatarUrl,
    };
    if (hasOrg) {
      meData.org = {
        slug: 'my-org',
      };
    }
  }

  const { navItems, userProfileNavItems } = getData({ locale, meData }).nav.header;
  const title = 'TiDB Community';
  const logo = <img alt={title} src='/images/community/logo.svg' />;
  const currentNav = utils.header.getCurrentNav(navItems, 'https://contributor.tidb.io/people/committer');

  return (
    <Header
      logo={logo}
      navItems={navItems}
      currentNav={currentNav}
      title={title}
      userProfileSlot={
        showUserProfile
          ? (
            <UserProfile
              onNavClick={onNavClick}
              currentNav={currentNav}
              items={userProfileNavItems}
              locale={locale}
              avatarUrl={avatarUrl}
            />
          )
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
  avatarUrl: `https://cdn.fakercloud.com/avatars/bassamology_128.jpg`,
};
