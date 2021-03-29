import { ViewMoreButton } from '@pingcap/pingcap-ui';

import { getTitle } from '../utils';

export default {
  title: getTitle('ViewMoreButton'),
  component: ViewMoreButton,
};

const Template = (args) => <ViewMoreButton {...args} />;

export const WithLabel = Template.bind({});

WithLabel.args = {
  children: 'View More',
};
