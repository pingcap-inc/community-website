import React from 'react';
import { Form, FormItem, Input } from 'formik-antd';
import { Formik } from 'formik';
import withVerifyCode from '@tidb-community/ui/components/verifyCodeInput';
import { wrapFormikSubmitFunction } from '@tidb-community/common/utils/form';

import { RouteLink } from '~/components/links';
import { SimpleLayout } from '~/layout';
import { SubmitButton } from '~/components/form';
import { form, formSchema, initialValues } from './check.form';
import { handleError } from '~/utils/errors';

const { verifyCode } = form;

const VerifyInput = withVerifyCode(Input);

const Page = ({ onSubmit }) => {
  onSubmit = wrapFormikSubmitFunction(onSubmit, handleError);

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
  title: '请输入验证码',
  subtitle: '请登录邮箱或检查手机的验证码',
  headTitle: '重置密码 | PingCAP Account',
};

export default Page;
