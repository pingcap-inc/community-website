import React from 'react';
import { Checkbox, Form, FormItem, Input } from 'formik-antd';
import { Formik } from 'formik';
import { Link, withVerifyCode } from '@tidb-community/ui';

import { Flex } from '~/components/layout';
import { RouteLink } from '~/components/links';
import { SimpleLayout } from '~/layouts';
import { SubmitButton, MobileInputPrefix } from '~/components/form';
import { form, formScheme, initialValues } from './register.form';

const { mobile, verifyCode, email, company, agreements } = form;

const VerifyInput = withVerifyCode(Input);

const { privacy, prefixText: agreementsPrefixText, ...agreementsProps } = agreements;

const Page = () => {
  const onSubmit = (data) => {
    console.log(data);
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <Formik validationSchema={formScheme} initialValues={initialValues} onSubmit={onSubmit}>
      {() => (
        <Form>
          <FormItem name={company.name}>
            <Input {...company} size="large" />
          </FormItem>
          <FormItem name={email.name}>
            <Input {...email} size="large" />
          </FormItem>
          <FormItem name={mobile.name}>
            <Input prefix={<MobileInputPrefix>+86</MobileInputPrefix>} {...mobile} size="large" />
          </FormItem>
          <FormItem name={verifyCode.name}>
            <VerifyInput {...verifyCode} size="large" />
          </FormItem>
          <Flex>
            <FormItem name={agreements.name}>
              <Checkbox {...agreementsProps}>
                {agreementsPrefixText}
                <Link href={privacy.url}>{privacy.title}</Link>
              </Checkbox>
            </FormItem>
            <RouteLink to="/login" style={{ lineHeight: '32px' }}>
              已有账号？去登陆
            </RouteLink>
          </Flex>
          <SubmitButton>注册</SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

Page.Layout = SimpleLayout;
Page.layoutProps = {
  title: '找回密码',
};

export default Page;
