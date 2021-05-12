import React, { useState } from 'react';
import { withActionMenu } from '@tidb-community/ui';
import { Menu, Dropdown, Button } from 'antd';

import { getTitle } from '../utils';

const ActionMenu = withActionMenu(Menu);

export default {
  title: getTitle('ActionMenu'),
  component: ActionMenu,
};

const Template = ({ delay }) => {
  const [text, setText] = useState(undefined);
  const action = ({ key }) => {
    setText(key);
    return new Promise((resolve) => setTimeout(resolve, delay));
  };
  return (
    <div>
      <p>Current: {text}</p>
      <Dropdown
        overlay={
          <ActionMenu action={action} Menu={Menu}>
            <ActionMenu.Item key="setting:1">Option 1</ActionMenu.Item>
            <ActionMenu.Item key="setting:2">Option 2</ActionMenu.Item>
          </ActionMenu>
        }
      >
        <Button type="link">click me</Button>
      </Dropdown>
    </div>
  );
};

export const ActionMenuWithDelay = Template.bind({});

ActionMenuWithDelay.args = {
  delay: 3000,
};
