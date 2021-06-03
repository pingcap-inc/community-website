import React from 'react';
import { Radio } from 'antd';

import { getTitle } from '../utils';

export default {
  title: getTitle('Radio'),
  component: Radio,
};

const Template = (args) => <Radio {...args} />;

export const BasicRadio = Template.bind({});
BasicRadio.args = {
  children: 'Radio',
  disabled: false,
  checked: false,
};
