import React from 'react';

import BasicModal from './modal.component';

const Modal = (props) => (
  <BasicModal {...props} title="更改手机号码">
    <span>Modal Content</span>
  </BasicModal>
);

export default Modal;
