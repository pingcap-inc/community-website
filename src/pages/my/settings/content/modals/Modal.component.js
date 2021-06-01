import React from 'react';
import { Modal as AntModal } from 'antd';

import * as Styled from './modal.styled';

const Modal = ({ children, ...props }) => (
  <AntModal width={480} cancelText="取消" okText="确定" onCancel={props.onClose} {...props}>
    <Styled.Container>{children}</Styled.Container>
  </AntModal>
);

export default Modal;
