import { Footer, data } from '@tidb-community/ui';

import { getTitle } from '../utils';

export default {
  title: getTitle('Footer'),
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const WithNav = Template.bind({});

const title = 'Community';
const { navItems } = data.footer;

WithNav.args = {
  navItems,
  title,
  logo: <img alt={title} src="/images/community/logo.svg" />,
};
