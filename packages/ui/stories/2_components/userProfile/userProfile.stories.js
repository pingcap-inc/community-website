import React from 'react';
import { UserProfile } from '@tidb-community/ui';
import { getTitle } from '../utils';

export default {
  title: getTitle('UserProfile'),
  component: UserProfile,
};

const Template = ({ avatarUrl, currentNav, hasLoggedIn, locale, onClickLogin, onNavClick }) => {
  const items = hasLoggedIn ? [{ title: 'link', link: 'link' }] : undefined;

  return (
    <UserProfile
      items={items}
      avatarUrl={avatarUrl}
      onClickLogin={onClickLogin}
      locale={locale}
      currentNav={currentNav}
      onNavClick={onNavClick}
    />
  );
};

export const SearchCompany = Template.bind({});

SearchCompany.args = {
  avatarUrl: 'https://cdn.fakercloud.com/avatars/bassamology_128.jpg',
  hasLoggedIn: false,
  locale: 'zh',
};
