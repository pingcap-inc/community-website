import React from 'react';
import { Form, FormItem, Input } from 'formik-antd';
import { Formik } from 'formik';
import { wrapFormikSubmitFunction } from '@tidb-community/common/utils/form';
import { getErrorMessage } from '@tidb-community/common/utils/errors';

import { RouteLink } from '~/components/links';
import { SimpleLayout } from '~/layout';
import { SubmitButton, PhoneInputPrefix } from '~/components/form';
import { form, formSchema, initialValues } from './send-verify-code.form';
import { message } from 'antd';

const { identifier } = form;

const Page = ({ onSubmit }) => {
  onSubmit = wrapFormikSubmitFunction(onSubmit, (error) => message.error(getErrorMessage(error), 5000));
  return (
    <Formik validationSchema={formSchema} initialValues={initialValues} onSubmit={onSubmit}>
      {() => (
        <Form>
          <FormItem name={identifier.name}>
            <Input prefix={<PhoneInputPrefix>+86</PhoneInputPrefix>} {...identifier} size="large" />
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
  title: '请输入验证码',
  subtitle: '请登录邮箱或检查手机的验证码',
};

export default Page;
