import React from 'react';
import { Form, FormItem, Input } from 'formik-antd';
import { Formik } from 'formik';

import { RouteLink } from '~/components/links';
import { SimpleLayout } from '~/layouts';
import { SubmitButton } from '~/components/form';
import { form, formScheme, initialValues } from './send-verify-code.form';

const { password, confirmPassword } = form;

const Page = ({ onSubmit }) => {
  return (
    <Formik validationSchema={formScheme} initialValues={initialValues} onSubmit={onSubmit}>
      {() => (
        <Form>
          <FormItem name={password.name}>
            <Input.Password {...password} size="large" />
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
};

export default Page;
