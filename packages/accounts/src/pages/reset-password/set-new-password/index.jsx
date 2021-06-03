import React from 'react';
import { Form, FormItem, Input } from 'formik-antd';
import { Formik } from 'formik';
import { wrapFormikSubmitFunction } from '@tidb-community/common/utils/form';

import { RouteLink } from '~/components/links';
import { SimpleLayout } from '~/layout';
import { SubmitButton } from '~/components/form';
import { form, formSchema, initialValues } from './send-verify-code.form';
import { handleError } from '~/utils/errors';

const { newPassword, confirmPassword } = form;

const Page = ({ onSubmit, location }) => {
  onSubmit = wrapFormikSubmitFunction(onSubmit, handleError);
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
          <RouteLink to={`/login${location.search}`}>返回登录</RouteLink>
          <SubmitButton>重置密码</SubmitButton>
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
