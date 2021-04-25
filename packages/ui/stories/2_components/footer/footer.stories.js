import React from 'react';
import { Footer } from '@tidb-community/ui';
import { getData } from '@tidb-community/datasource';

import { getTitle } from '../utils';

export default {
  title: getTitle('Footer'),
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const WithNav = Template.bind({});

const title = 'TiDB Community';
const { navItems, icons } = getData({ locale: 'en' }).nav.footer;

WithNav.args = {
  icons,
  logo: <img alt={title} src="/images/community/logo.svg" />,
  navItems,
  title,
};
