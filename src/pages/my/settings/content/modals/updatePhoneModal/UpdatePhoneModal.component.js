import React from 'react';
import { Form, FormItem, Input } from 'formik-antd';
import { Formik } from 'formik';
import { api } from '@tidb-community/datasource';
import { withVerifyCode } from '@tidb-community/ui';

import * as Styled from './updatePhoneModal.styled';
import BasicModal, { formId } from '../Modal.component';
import { form as formUtils } from '~/utils';
import { fields, initialValues, schema } from './updatePhoneModal.fields';

const VerifyCodeInput = withVerifyCode(Input);

const Modal = (props) => {
  const { phone, code } = fields;
  const phoneName = phone.name;

  const onSubmit = formUtils.wrapFormikSubmitFunction((values) => {
    console.log('onSubmit!!', values);
    return Promise.resolve();
  });

  const formikProps = {
    initialValues,
    onSubmit,
    validationSchema: schema,
  };

  return (
    <BasicModal {...props} title="更改手机号码">
      <Formik {...formikProps}>
        {({ values, errors, touched }) => {
          const sendVerifyCode = () => {
            return formUtils.getCaptchaToken().then((re_token_v3) => {
              console.log('re_token_v3', re_token_v3);
              return api.account.setPhoneCode({
                phone: values.phone,
                re_token_v3,
              });
            });
          };

          const codeInputProps = {
            ...code,
            sendVerifyCode,
            buttonDisabled: errors[phoneName] || !touched[phoneName],
          };

          return (
            <Form id={formId}>
              <FormItem name={phoneName}>
                <Styled.PhoneInput prefix="+86" {...phone} />
              </FormItem>
              <FormItem name={code.name}>
                <VerifyCodeInput {...codeInputProps} />
              </FormItem>
            </Form>
          );
        }}
      </Formik>
    </BasicModal>
  );
};

export default Modal;
