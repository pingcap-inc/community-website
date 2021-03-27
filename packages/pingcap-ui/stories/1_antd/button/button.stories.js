import React from 'react';
import { Button } from 'antd';

import { getTitle } from '../utils';

export default {
  title: getTitle('Button'),
  component: Button,
  argTypes: {
    type: {
      control: false
    },
    ghost: {
      control: false
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'default', 'large']
      }
    }
  }
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  disabled: false,
  size: 'small',
  type: 'primary'
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  disabled: false,
  ghost: true,
  size: 'small',
  type: 'primary'
};
