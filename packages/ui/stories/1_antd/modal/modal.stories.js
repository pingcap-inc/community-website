import React from 'react';
import { Button, Modal, Space } from 'antd';

import { getTitle } from '../utils';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const ShowConfirmDialog = () => {
  const showConfirm = (e) =>
    Modal.confirm({
      title: 'Do you Want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      onOk() {},
      onCancel() {},
    });

  return (
    <Space>
      <Button onClick={showConfirm}>Confirm</Button>
    </Space>
  );
};

export default {
  title: getTitle('Modal'),
};

const ConfirmDialogTemplate = () => <ShowConfirmDialog />;

export const ConfirmDialog = ConfirmDialogTemplate.bind({});
