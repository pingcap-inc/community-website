import React from 'react';
import { Form, FormItem, Input } from 'formik-antd';
import { Formik } from 'formik';
import withVerifyCode from '@tidb-community/ui/components/verifyCodeInput';

import { RouteLink } from '~/components/links';
import { SimpleLayout } from '~/layout';
import { SubmitButton } from '~/components/form';
import { form, formSchema, initialValues } from './check.form';

const { verifyCode } = form;

const VerifyInput = withVerifyCode(Input);

const Page = ({ onSubmit }) => {
  return (
    <Formik validationSchema={formSchema} initialValues={initialValues} onSubmit={onSubmit}>
      {() => (
        <Form>
          <FormItem name={verifyCode.name}>
            <VerifyInput {...verifyCode} initialLimited size="large" />
          </FormItem>
          <RouteLink to="/login">返回登录</RouteLink>
          <SubmitButton>下一步</SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

Page.Layout = SimpleLayout;
Page.layoutProps = {
  title: '找回密码',
  subtitle: '验证码将会发送到您的手机号或邮箱',
};

export default Page;
