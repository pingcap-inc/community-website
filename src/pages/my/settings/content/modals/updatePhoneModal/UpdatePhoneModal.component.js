import React from 'react';
import { Form, FormItem, Input } from 'formik-antd';
import { Formik } from 'formik';
import { withVerifyCode } from '@tidb-community/ui';

import * as Styled from './updatePhoneModal.styled';
import BasicModal, { formId } from '../Modal.component';
import { form as formUtils } from '~/utils';
import { fields, initialValues, schema } from './updatePhoneModal.fields';

const VerifyCodeInput = withVerifyCode(Input);

const Modal = (props) => {
  const onOk = () => {
    console.log('onOk');
  };

  const onSubmit = formUtils.wrapFormikSubmitFunction((values) => {
    console.log('onSubmit!!', values);
    return Promise.resolve();
  });

  const { phone, code } = fields;

  const formikProps = {
    initialValues,
    onSubmit,
    validationSchema: schema,
  };

  return (
    <BasicModal {...props} title="更改手机号码" onOk={onOk}>
      <Formik {...formikProps}>
        {({ errors }) => (
          <Form id={formId}>
            <FormItem name={phone.name}>
              <Styled.PhoneInput prefix="+86" {...phone} />
            </FormItem>
            <FormItem name={code.name}>
              <VerifyCodeInput {...code} />
            </FormItem>
          </Form>
        )}
      </Formik>
    </BasicModal>
  );
};

export default Modal;
