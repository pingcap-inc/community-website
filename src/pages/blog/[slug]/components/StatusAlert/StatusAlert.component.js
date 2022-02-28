import React from 'react';
import { Alert } from 'antd';

const StatusAlert = ({ blog }) => {
  if (blog.status === 'DRAFT') {
    return <Alert type="error" message="该文章目前为草稿状态，请提交审核以发布。" />;
  }

  if (blog.status === 'PENDING') {
    return <Alert type="error" message="该文章正在审核中，其他用户暂时不可见。" />;
  }

  if (blog.status === 'REJECTED') {
    return (
      <Alert type="error" message={`该文章被审核人员拒绝发布，请修改后重新提交审核。拒绝原因：${blog.rejectReason}`} />
    );
  }

  if (blog.status === 'ARCHIVED') {
    return <Alert type="error" message="该文章已删除。" />;
  }

  return <></>;
};

export default StatusAlert;
