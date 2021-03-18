import React from 'react';
import { Button } from 'antd';

export default {
  title: 'Ant Design/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Types = Template.bind({});
Types.args = {
  type: 'primary',
  children: 'Button',
};
