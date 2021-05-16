import React from 'react';
import { Pagination } from 'antd';

import { getTitle } from '../utils';

export default {
  title: getTitle('Pagination'),
  component: Pagination,
  argTypes: {
    size: {
      control: false,
    },
  },
};

const Template = (args) => <Pagination {...args} />;

export const BasicPagination = Template.bind({});
BasicPagination.args = {
  defaultCurrent: 1,
  total: 50,
};

export const MiniPagination = Template.bind({});
MiniPagination.args = {
  size: 'small',
  defaultCurrent: 1,
  total: 50,
};
