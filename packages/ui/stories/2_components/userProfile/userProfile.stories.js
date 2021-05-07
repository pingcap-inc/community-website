import React from 'react';
import { UserProfile } from '@tidb-community/ui';
import { getTitle } from '../utils';

export default {
  title: getTitle('UserProfile'),
  component: UserProfile,
};

const Template = ({ login, inOrg, onClickLogin, locale, currentNav, onNavClick }) => {
  const meData = login ? { org: inOrg ? { slug: 'my-org'} : undefined } : null;

  return (
    <UserProfile
      meData={meData}
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
  inOrg: false,
  locale: 'zh',
};
