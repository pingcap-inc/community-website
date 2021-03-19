import { Header } from '@pingcap/pingcap-ui';

import { getTitle } from '../utils';
import { navItems } from './header.data';

export default {
  title: getTitle('Header'),
  component: Header,
};

const Template = (args) => <Header navItems={navItems} {...args} />;

export const WithNav = Template.bind({});
