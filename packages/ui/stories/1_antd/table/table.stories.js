import * as R from 'ramda';
import React from 'react';
import { Table } from 'antd';

import * as data from './table.data';
import { getTitle } from '../utils';

export default {
  title: getTitle('Table'),
  component: Table,
  argTypes: {
    pagination: {
      control: false,
    },
  },
};

const Template = (args) => <Table {...args} />;

export const SimpleTable = Template.bind({});
SimpleTable.args = {
  ...R.pick(['dataSource', 'columns'], data),
  pagination: false,
};
