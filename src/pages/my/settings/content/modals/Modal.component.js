import React from 'react';
import { Modal as AntModal } from 'antd';

import * as Styled from './modal.styled';

// See: https://github.com/ant-design/ant-design/issues/9380#issuecomment-581027250
// Please note, the official useForm solution doesn't work if importing Form from
// formik-antd. It's more like an issue of formik-antd but I haven't dived into it.
export const formId = 'my-settings-form';

const Modal = ({ children, ...props }) => (
  <AntModal
    cancelText="取消"
    destroyOnClose
    okButtonProps={{ form: formId, htmlType: 'submit' }}
    okText="确定"
    onCancel={props.onClose}
    width={480}
    {...props}
  >
    <Styled.Container>{children}</Styled.Container>
  </AntModal>
);

export default Modal;
