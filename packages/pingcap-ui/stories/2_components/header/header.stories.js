import React from 'react';
import { Header, utils } from '@pingcap/pingcap-ui';

import { getTitle } from '../utils';
import { navItems } from './header.data';

export default {
  title: getTitle('Header'),
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const WithNav = Template.bind({});

const title = 'Community';

WithNav.args = {
  navItems,
  title,
  currentNav: utils.header.getCurrentNav(navItems, 'https://developer.tidb.io/people/committer'),
  logo: <img alt={title} src="/images/community/logo.svg" />,
};
