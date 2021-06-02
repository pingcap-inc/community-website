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
      api.profile
        .update({
          ...values,
          re_token_v3,
        })
        .then(() => {
          message.success('手机号码更新成功');
        })
        .finally(() => {
          setIsSubmitting(false);
          revalidate();
          onClose();
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
        {({ values, errors, touched }) => {
          const sendVerifyCode = () =>
            formUtils.getCaptchaToken().then((re_token_v3) =>
              api.account.sendPhoneCode({
                phone: values.phone,
                re_token_v3,
              })
            );

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
