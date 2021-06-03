import React from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { getTitle } from '../utils';

export default {
  title: getTitle('Input'),
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'default', 'large'],
      },
    },
  },
};

const placeholder = 'Placeholder text';

const InputTemplate = (args) => <Input {...args} />;

export const BasicInput = InputTemplate.bind({});
BasicInput.args = {
  placeholder,
  disabled: false,
  size: 'default',
};

export const InputWithPrefix = InputTemplate.bind({});
InputWithPrefix.args = {
  placeholder,
  disabled: false,
  size: 'default',
  prefix: <UserOutlined />,
};

const { TextArea } = Input;
const TextareaTemplate = (args) => <TextArea {...args} />;

export const TextareaWithCharacterCounting = TextareaTemplate.bind({});
TextareaWithCharacterCounting.args = {
  placeholder,
  showCount: true,
  maxLength: 100,
};
