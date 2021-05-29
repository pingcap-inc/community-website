import React from 'react';
import { Checkbox } from 'antd';

import { getTitle } from '../utils';

export default {
  title: getTitle('Checkbox'),
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const BasicCheckbox = Template.bind({});
BasicCheckbox.args = {
  children: 'Checkbox',
  disabled: false,
  checked: false,
};
