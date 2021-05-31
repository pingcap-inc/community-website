import React from 'react';
import { Form, FormItem, Input } from 'formik-antd';
import { Formik } from 'formik';
import { wrapFormikSubmitFunction } from '@tidb-community/common/utils/form';
import { getErrorMessage } from '@tidb-community/common/utils/errors';

import { RouteLink } from '~/components/links';
import { SimpleLayout } from '~/layout';
import { SubmitButton } from '~/components/form';
import { form, formSchema, initialValues } from './send-verify-code.form';
import { message } from 'antd';

const { newPassword, confirmPassword } = form;

const Page = ({ onSubmit }) => {
  onSubmit = wrapFormikSubmitFunction(onSubmit, (error) => message.error(getErrorMessage(error), 5000));
  return (
    <Formik validationSchema={formSchema} initialValues={initialValues} onSubmit={onSubmit}>
      {() => (
        <Form>
          <FormItem name={newPassword.name}>
            <Input.Password {...newPassword} size="large" />
          </FormItem>
          <FormItem name={confirmPassword.name}>
            <Input.Password {...confirmPassword} size="large" />
          </FormItem>
          <RouteLink to="/login">返回登录</RouteLink>
          <SubmitButton>发送验证码</SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

Page.Layout = SimpleLayout;
Page.layoutProps = {
  title: '设置新密码',
  subtitle: '请使用至少8个字符，字母、数字的组合',
  headTitle: '重置密码 | PingCAP Account',
};

export default Page;
