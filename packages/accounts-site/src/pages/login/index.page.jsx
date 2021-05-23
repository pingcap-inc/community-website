import React from 'react';
import { Formik } from 'formik';
import { Form, FormItem, Input } from 'formik-antd';
import { withVerifyCode } from '@tidb-community/ui';
import { Divider } from 'antd';

import { SimpleLayout } from '../../layout';
import { form, formScheme, initialValues } from './login.form';
import { SubmitButton, MobileInputPrefix } from '../../components/form';
import { RouteLink, ActionLink } from '../../components/links';
import { Flex } from '../../components/layout';
import { GithubOutlined } from '@ant-design/icons';
import { LOGIN_TYPE, LOGIN_TYPE_NAME } from './login.constants';

const { mobile, verifyCode, password, loginType } = form;

const VerifyInput = withVerifyCode(Input);

const Page = () => {
  const onThirdPartyLogin = (provider) => () => {
    console.log(`login with ${provider}`);
  };

  const onSubmit = (data) => {
    console.log(data);
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <Formik validationSchema={formScheme} initialValues={initialValues} onSubmit={onSubmit}>
      {({ setFieldValue, values }) => (
        <Form>
          <FormItem name={mobile.name}>
            <Input prefix={<MobileInputPrefix>+86</MobileInputPrefix>} {...mobile} size="large" />
          </FormItem>
          <FormItem name={verifyCode.name} hidden={values[loginType.name] !== LOGIN_TYPE.VERIFY_CODE}>
            <VerifyInput {...verifyCode} size="large" />
          </FormItem>
          <FormItem name={password.name} hidden={values[loginType.name] !== LOGIN_TYPE.PASSWORD}>
            <Input.Password {...password} size="large" />
          </FormItem>
          <ActionLink onClick={() => setFieldValue(loginType.name, 1 - values[loginType.name])}>
            {LOGIN_TYPE_NAME[1 - values[loginType.name]]}
          </ActionLink>
          <SubmitButton>登录</SubmitButton>
          <Flex>
            <ActionLink onClick={onThirdPartyLogin('github')}>
              <GithubOutlined />
              &nbsp; GitHub 登陆
            </ActionLink>
            <span>
              <RouteLink to="/register">注册</RouteLink>
              <Divider type="vertical" />
              <RouteLink to="/reset-password">忘记密码</RouteLink>
            </span>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

Page.Layout = SimpleLayout;

export default Page;
