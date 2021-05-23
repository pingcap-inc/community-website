import React from 'react';
import { Formik } from 'formik';
import { Form, FormItem, Input } from 'formik-antd';
import { withVerifyCode } from '@tidb-community/ui';

import { SimpleLayout } from '../../../layout';
import { form, formScheme, initialValues } from './check.form';
import { SubmitButton } from '../../../components/form';
import { RouteLink } from '../../../components/links';

const { verifyCode } = form;

const VerifyInput = withVerifyCode(Input);

const Page = ({ onSubmit }) => {
  return (
    <Formik validationSchema={formScheme} initialValues={initialValues} onSubmit={onSubmit}>
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
