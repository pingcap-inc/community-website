import React from 'react';
import { Select } from 'antd';

import { getTitle } from '../utils';

export default {
  title: getTitle('Select'),
  component: Select,
};

const { Option } = Select;

const Template = ({ defaultValue }) => (
  <Select defaultValue={defaultValue} style={{ width: 120 }}>
    <Option value="jack">Jack</Option>
    <Option value="nick">Nick</Option>
    <Option value="disabled" disabled>
      Disabled
    </Option>
    <Option value="matt">Matt</Option>
  </Select>
);

export const BasicSelect = Template.bind({});
BasicSelect.args = {
  defaultValue: 'nick',
};
