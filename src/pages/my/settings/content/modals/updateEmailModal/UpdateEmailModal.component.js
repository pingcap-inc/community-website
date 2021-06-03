import React, { useState } from 'react';
import { Form, FormItem, Input } from 'formik-antd';
import { Formik } from 'formik';
import { api } from '@tidb-community/datasource';
import { message } from 'antd';
import { withVerifyCode } from '@tidb-community/ui';

import BasicModal, { formId } from '../Modal.component';
import { fields, initialValues, schema } from './updateEmailModal.fields';
import { form as formUtils } from '~/utils';

const VerifyCodeInput = withVerifyCode(Input);

const Modal = ({ revalidate, ...props }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { onClose } = props;
  const { email, code } = fields;
  const emailName = email.name;

  const onSubmit = formUtils.wrapFormikSubmitFunction((values) => {
    setIsSubmitting(true);

    return formUtils.getCaptchaToken().then((re_token_v3) =>
      api.account
        .setEmail({
          ...values,
          re_token_v3,
        })
        .then(() => {
          message.success('邮箱更新成功');
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
    title: '更改邮箱',
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
              api.account.sendEmailCode({
                email: values[emailName],
                re_token_v3,
              })
            )
          );

          const codeInputProps = {
            ...code,
            sendVerifyCode: (email) => sendVerifyCode(email, { setErrors, setTouched }),
            buttonDisabled: errors[emailName] || !values[emailName],
          };

          return (
            <Form id={formId}>
              <FormItem name={emailName}>
                <Input {...email} />
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
