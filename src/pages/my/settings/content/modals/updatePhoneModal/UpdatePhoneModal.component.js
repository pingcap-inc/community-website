import React from 'react';
import { Button } from 'antd';
import { Form, FormItem, Input } from 'formik-antd';
import { Formik } from 'formik';
import { withVerifyCode } from '@tidb-community/ui';

import * as Styled from './updatePhoneModal.styled';
import BasicModal from '../Modal.component';
import { form as formUtils } from '~/utils';
import { form, initialValues, schema } from './updatePhoneModal.data';

const VerifyCodeInput = withVerifyCode(Input);

const Modal = (props) => {
  const onOk = () => {
    console.log('onOk!!');
  };

  const onSubmit = formUtils.wrapFormikSubmitFunction((values) => {
    console.log('onSubmit!!', values);
    return Promise.resolve();
  });

  const { phone, code } = form;

  const formikProps = {
    initialValues,
    onSubmit,
    validationSchema: schema,
  };

  return (
    <BasicModal {...props} title="更改手机号码" onOk={onOk}>
      <Formik {...formikProps}>
        {({ errors }) => (
          <Form>
            <FormItem name={phone.name}>
              <Styled.PhoneInput prefix="+86" {...phone} />
            </FormItem>
            <FormItem name={code.name}>
              <VerifyCodeInput {...code} />
            </FormItem>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </BasicModal>
  );
};

export default Modal;
