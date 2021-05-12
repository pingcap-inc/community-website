import React from 'react';
import { Header, UserProfile, utils } from '@tidb-community/ui';
import { getData } from '@tidb-community/datasource';

import { getTitle } from '../utils';

export default {
  title: getTitle('Header'),
  argTypes: {
    locale: {
      control: {
        type: 'radio',
        options: ['zh', 'en'],
      },
    },
  },
};

const Template = ({ avatarUrl, hasOrg, isLoggedIn, isShowUserProfile, locale, onNavClick }) => {
  let meData;
  if (isLoggedIn) {
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
  const logo = <img alt={title} src="/images/community/logo.svg" />;
  const currentNav = utils.header.getCurrentNav(navItems, 'https://contributor.tidb.io/people/committer');

  return (
    <Header
      logo={logo}
      navItems={navItems}
      currentNav={currentNav}
      title={title}
      userProfileSlot={
        isShowUserProfile ? (
          <UserProfile
            onNavClick={onNavClick}
            currentNav={currentNav}
            items={userProfileNavItems}
            locale={locale}
            avatarUrl={avatarUrl}
          />
        ) : undefined
      }
    />
  );
};

export const WithUserProfile = Template.bind({});

WithUserProfile.args = {
  avatarUrl: 'https://cdn.fakercloud.com/avatars/bassamology_128.jpg',
  hasOrg: false,
  isLoggedIn: false,
  isShowUserProfile: false,
  locale: 'zh',
};
