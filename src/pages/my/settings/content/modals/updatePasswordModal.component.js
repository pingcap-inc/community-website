import React from 'react';
import { Modal as AntModal } from 'antd';

const Modal = (props) => (
  <AntModal {...props} title="更改密码" cancelText="取消" okText="确定" onCancel={props.onClose}>
    <span>Modal Content</span>
  </AntModal>
);

export default Modal;
