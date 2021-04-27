import React from 'react';
import { Tabs } from 'antd';

import { getTitle } from '../utils';

const { TabPane } = Tabs;

export default {
  title: getTitle('Tabs'),
  component: Tabs,
};

const Template = (args) => (
  <Tabs {...args}>
    <TabPane tab="Tab 1" key="1">
      Content of Tab Panel 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Panel 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Panel 3
    </TabPane>
  </Tabs>
);

export const WithPanels = Template.bind({});
WithPanels.args = {};
