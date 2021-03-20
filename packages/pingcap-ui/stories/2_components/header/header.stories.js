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
const title = 'Community';
WithNav.args = {
  navItems,
  title,
  logo: <img alt={title} src="/images/community/logo.svg" />,
};
