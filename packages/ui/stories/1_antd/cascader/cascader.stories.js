import * as R from 'ramda';
import React from 'react';
import { Cascader } from 'antd';

import * as data from './cascader.data';
import { getTitle } from '../utils';

export default {
  title: getTitle('Cascader'),
  component: Cascader,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'middle', 'large'],
      },
    },
  },
};

const Template = (args) => <Cascader {...args} />;

export const BasicCascader = Template.bind({});
BasicCascader.args = {
  ...R.pick(['options'], data),
  size: 'middle',
};
