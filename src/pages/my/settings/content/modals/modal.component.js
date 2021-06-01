import React from 'react';
import { Modal as AntModal } from 'antd';

const Modal = ({ children, ...props }) => (
  <AntModal cancelText="取消" okText="确定" onCancel={props.onClose} {...props}>
    {children}
  </AntModal>
);

export default Modal;
