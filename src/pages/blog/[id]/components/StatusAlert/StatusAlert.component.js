import React from 'react';
import { Alert } from 'antd';

const StatusAlert = ({ blogInfo }) => {
  if (blogInfo.status === 'DRAFT') {
    return <Alert message="该文章目前为草稿状态，请提交审核以发布。" />;
  }

  if (blogInfo.status === 'PENDING') {
    return <Alert message="该文章正在审核中，其他用户暂时不可见。" />;
  }

  if (blogInfo.status === 'REJECTED') {
    return <Alert type="warning" message="该文章被审核人员拒绝发布，请修改后重新提交审核。" />;
  }

  if (blogInfo.status === 'ARCHIVED') {
    return <Alert type="error" message="该文章已删除。" />;
  }

  return <></>;
};

export default StatusAlert;
