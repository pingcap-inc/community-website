import React from 'react';
import { UserProfile } from '@tidb-community/ui';
import { getTitle } from '../utils';

export default {
  title: getTitle('UserProfile'),
  component: UserProfile,
};

const Template = ({ login, avatarUrl, onClickLogin, locale, currentNav, onNavClick }) => {
  const items = login ? [{ title: 'link', link: 'link' }] : undefined

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
  login: false,
  locale: 'zh',
  avatarUrl: `https://cdn.fakercloud.com/avatars/bassamology_128.jpg`
};
