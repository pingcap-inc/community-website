import React, { useState } from 'react';
import { Form, FormItem, Input } from 'formik-antd';
import { Formik } from 'formik';
import { api } from '@tidb-community/datasource';
import { message } from 'antd';

import BasicModal, { formId } from '../Modal.component';
import { fields, initialValues, schema } from './updatePasswordModal.fields';
import { form as formUtils } from '~/utils';

const Modal = ({ revalidate, ...props }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { onClose } = props;
  const { oldPassword, newPassword, confirmPassword } = fields;

  const onSubmit = formUtils.wrapFormikSubmitFunction((values) => {
    setIsSubmitting(true);

    return formUtils.getCaptchaToken().then((re_token_v3) =>
      api.account
        .resetPassword({
          ...values,
          re_token_v3,
        })
        .then(() => {
          message.success('密码更新成功');
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
    title: '更改密码',
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
            <FormItem name={oldPassword.name}>
              <Input {...oldPassword} />
            </FormItem>
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
