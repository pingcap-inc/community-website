import * as R from 'ramda';
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
    }
  }
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  disabled: false,
  children: 'Button'
};

export const Outline = Template.bind({});
Outline.args = {
  type: 'primary',
  ghost: true,
  disabled: false,
  children: 'Button'
};
