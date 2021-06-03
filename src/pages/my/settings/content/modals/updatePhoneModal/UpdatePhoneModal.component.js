import React, { useState } from 'react';
import { Form, FormItem, Input } from 'formik-antd';
import { Formik } from 'formik';
import { api } from '@tidb-community/datasource';
import { message } from 'antd';
import { withVerifyCode } from '@tidb-community/ui';

import * as Styled from './updatePhoneModal.styled';
import BasicModal, { formId } from '../Modal.component';
import { fields, initialValues, schema } from './updatePhoneModal.fields';
import { form as formUtils } from '~/utils';

const VerifyCodeInput = withVerifyCode(Input);

const Modal = ({ revalidate, ...props }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { onClose } = props;
  const { phone, code } = fields;
  const phoneName = phone.name;

  const onSubmit = formUtils.wrapFormikSubmitFunction((values) => {
    setIsSubmitting(true);

    return formUtils.getCaptchaToken().then((re_token_v3) =>
      api.account
        .setPhone({
          ...values,
          re_token_v3,
        })
        .then(() => {
          message.success('手机号码更新成功');
          revalidate();
          onClose();
        })
        .finally(() => {
          setIsSubmitting(false);
        })
    );
  });

  const modalProps = {
    ...props,
    title: '更改手机号码',
    extendedOkButtonProps: {
      loading: isSubmitting,
    },
  };

  const formikProps = {
    initialValues,
    onSubmit,
    validationSchema: schema,
  };

  return (
    <BasicModal {...modalProps}>
      <Formik {...formikProps}>
        {({ values, errors, setErrors, setTouched }) => {
          const sendVerifyCode = formUtils.wrapFormikSubmitFunction(() =>
            formUtils.getCaptchaToken().then((re_token_v3) =>
              api.account.sendPhoneCode({
                phone: values[phoneName],
                re_token_v3,
              })
            )
          );

          const codeInputProps = {
            ...code,
            sendVerifyCode: (phone) => sendVerifyCode(phone, { setErrors, setTouched }),
            buttonDisabled: errors[phoneName] || !values[phoneName],
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
