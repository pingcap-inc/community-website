import React from 'react';
import { UserProfile } from '@tidb-community/ui';

import { getTitle, disableControl } from '../utils';

export default {
  title: getTitle('UserProfile'),
  component: UserProfile,
  argTypes: {
    ...disableControl(['avatarUrl', 'currentNav', 'items']),
  },
};

const Template = ({ avatarUrl, items, locale, ...restProps }) => (
  <UserProfile avatarUrl={avatarUrl} items={items} locale={locale} {...restProps} />
);

export const Anonymous = Template.bind({});
Anonymous.args = {
  locale: 'zh',
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  avatarUrl: 'https://cdn.fakercloud.com/avatars/bassamology_128.jpg',
  items: [
    { title: 'Mock Title', link: 'mockLink' },
    { title: 'Mock Title2', link: 'mockLink' },
  ],
  locale: 'zh',
};
