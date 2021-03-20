import React from 'react';
import { Header } from '@pingcap/pingcap-ui';

import { getTitle } from '../utils';
import { navItems } from './header.data';

export default {
  title: getTitle('Header'),
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const WithNav = Template.bind({});
WithNav.args = {
  logo: <img alt="PingCAP Community" src="/images/community/logo.svg" />,
  title: 'Community',
  navItems,
};
