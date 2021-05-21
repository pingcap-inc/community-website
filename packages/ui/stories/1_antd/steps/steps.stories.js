import React from 'react';
import { Steps } from 'antd';

import { getTitle } from '../utils';

const { Step } = Steps;

export default {
  title: getTitle('Steps'),
  component: Steps,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'default', 'large'],
      },
    },
  },
};

const Template = (args) => (
  <Steps {...args}>
    <Step title="Finished" />
    <Step title="In Progress" />
    <Step title="Waiting" />
  </Steps>
);

export const BasicSteps = Template.bind({});
BasicSteps.args = {
  size: 'default',
  current: 1,
};
