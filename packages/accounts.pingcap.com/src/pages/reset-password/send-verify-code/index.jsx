import React from 'react';
import { Formik } from 'formik';
import { Form, FormItem, Input } from 'formik-antd';

import { SimpleLayout } from '../../../layout';
import { form, formScheme, initialValues } from './send-verify-code.form';
import { SubmitButton, MobileInputPrefix } from '../../../components/form';
import { RouteLink } from '../../../components/links';

const { mobileOrEmail } = form;

const Page = ({ onSubmit }) => {

  return (
    <Formik validationSchema={formScheme} initialValues={initialValues} onSubmit={onSubmit}>
      {
        () => (
          <Form>
            <FormItem name={mobileOrEmail.name}>
              <Input prefix={<MobileInputPrefix>+86</MobileInputPrefix>} {...mobileOrEmail} size='large' />
            </FormItem>
            <RouteLink to='/login'>返回登录</RouteLink>
            <SubmitButton>发送验证码</SubmitButton>
          </Form>
        )
      }
    </Formik>
  );
};

Page.Layout = SimpleLayout;
Page.layoutProps = {
  title: '请输入验证码',
  subtitle: '请登录邮箱或检查手机的验证码',
};

export default Page;
