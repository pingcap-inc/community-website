import React, { useState } from 'react';
import { Form, FormItem, Input } from 'formik-antd';
import { Formik } from 'formik';
import { api } from '@tidb-community/datasource';

import BasicModal, { formId } from '../Modal.component';
import { fields, initialValues, schema } from './setPasswordModal.fields';
import { form as formUtils } from '~/utils';

const Modal = ({ onSuccess, ...props }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { onClose } = props;
  const { newPassword, confirmPassword } = fields;

  const onSubmit = formUtils.wrapFormikSubmitFunction((values) => {
    setIsSubmitting(true);

    return formUtils.getCaptchaToken().then((re_token_v3) =>
      api.account
        .setPassword({
          ...values,
          re_token_v3,
        })
        .then(() => {
          onClose();
          onSuccess();
        })
        .finally(() => {
          setIsSubmitting(false);
        })
    );
  });

  const modalProps = {
    ...props,
    title: '设置密码',
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
        {
          <Form id={formId}>
            <FormItem name={newPassword.name}>
              <Input {...newPassword} />
            </FormItem>
            <FormItem name={confirmPassword.name}>
              <Input {...confirmPassword} />
            </FormItem>
          </Form>
        }
      </Formik>
    </BasicModal>
  );
};

export default Modal;
