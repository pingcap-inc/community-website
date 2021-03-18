import React from 'react';
import { Button } from 'antd';

import { getTitle } from '../utils';

export default {
  title: getTitle('Button'),
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Types = Template.bind({});
Types.args = {
  type: 'primary',
  children: 'Button',
};
