import React from 'react';
import { Form, Input } from 'formik-antd';
import { Formik } from 'formik';
import { withVerifyCode } from '@tidb-community/ui';

import * as Styled from './updatePhoneModal.styled';
import BasicModal from '../Modal.component';
import { form as formUtils } from '~/utils';
import { form, initialValues, schema } from './updatePhoneModal.data';

const VerifyCodeInput = withVerifyCode(Input);

const Modal = (props) => {
  const onSubmit = formUtils.wrapFormikSubmitFunction((values) => {
    console.log(values);
  });

  const { phone, code } = form;

  const formikProps = {
    initialValues,
    onSubmit,
    validationSchema: schema,
  };

  return (
    <BasicModal {...props} title="更改手机号码">
      <Formik {...formikProps}>
        {({ errors }) => (
          <Form layout="vertical">
            <Styled.PhoneInput prefix="+86" {...phone} />
            <VerifyCodeInput {...code} />
          </Form>
        )}
      </Formik>
    </BasicModal>
  );
};

export default Modal;
