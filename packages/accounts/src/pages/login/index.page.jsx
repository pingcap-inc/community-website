import FormikOption from '@tidb-community/common/components/FormikOption';
import React from 'react';
import withVerifyCode from '@tidb-community/ui/components/verifyCodeInput';
import { Divider } from 'antd';
import { Form, FormItem, Input } from 'formik-antd';
import { Formik } from 'formik';
import { GithubOutlined } from '@ant-design/icons';
import { parse } from 'querystring';
import { useLocation } from 'react-router-dom';
import { wrapFormikSubmitFunction } from '@tidb-community/common/utils/form';

import { SimpleLayout } from '~/layout';
import { phoneLogin, passwordLogin, socialLogin } from '~/api';
import { form, formSchema, initialValues } from './login.form';
import { SubmitButton, PhoneInputPrefix } from '~/components/form';
import { RouteLink, ActionLink } from '~/components/links';
import { Flex } from '~/components/layout';
import { LOGIN_TYPE, LOGIN_TYPE_NAME } from './login.constants';
import { handleError } from '~/utils/errors';

const { phone, verifyCode, identifier, password, loginType } = form;

const VerifyInput = withVerifyCode(Input);

const Page = () => {
  const location = useLocation();
  const query = parse(location.search.slice(1));

  const onThirdPartyLogin = (provider) => () => {
    socialLogin({ provider, ...query });
  };

  const login = wrapFormikSubmitFunction((data) => {
    const loginFunc = data.loginType === LOGIN_TYPE.PASSWORD ? passwordLogin : phoneLogin;
    const redirectTo = query.redirect_to || '';
    return loginFunc({ ...data, redirect_to: redirectTo }).then(({ redirectTo }) => {
      window.open(redirectTo, '_top');
    });
  }, handleError);
  const sendVerifyCode = wrapFormikSubmitFunction(verifyCode.sendVerifyCode, handleError);

  return (
    <Formik validationSchema={formSchema} initialValues={initialValues} onSubmit={login}>
      {({ values, errors, touched, setFieldValue, setErrors, setTouched }) => (
        <Form>
          <FormikOption fieldName={loginType.name}>
            {({ option }) => (
              <>
                <FormItem name={phone.name} hidden={option !== LOGIN_TYPE.VERIFY_CODE}>
                  <Input prefix={<PhoneInputPrefix>+86</PhoneInputPrefix>} {...phone} size="large" />
                </FormItem>
                <FormItem name={verifyCode.name} hidden={option !== LOGIN_TYPE.VERIFY_CODE}>
                  <VerifyInput
                    {...verifyCode}
                    sendVerifyCode={() => sendVerifyCode(values[phone.name], { setErrors, setTouched })}
                    buttonDisabled={errors[phone.name] || !values[phone.name]}
                    size="large"
                  />
                </FormItem>
                <FormItem name={identifier.name} hidden={option !== LOGIN_TYPE.PASSWORD}>
                  <Input {...identifier} size="large" />
                </FormItem>
                <FormItem name={password.name} hidden={option !== LOGIN_TYPE.PASSWORD}>
                  <Input.Password {...password} size="large" />
                </FormItem>
                <ActionLink onClick={() => setFieldValue(loginType.name, 1 - option)}>
                  {LOGIN_TYPE_NAME[1 - option]}
                </ActionLink>
              </>
            )}
          </FormikOption>
          <SubmitButton>登录</SubmitButton>
          <Flex>
            <ActionLink onClick={onThirdPartyLogin('github')}>
              <GithubOutlined />
              &nbsp; GitHub 登录
            </ActionLink>
            <span>
              <RouteLink to={`/register${location.search}`}>注册</RouteLink>
              <Divider type="vertical" />
              <RouteLink to={`/reset-password${location.search}`}>忘记密码</RouteLink>
            </span>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

Page.Layout = SimpleLayout;
Page.layoutProps = {
  headTitle: '登陆 | PingCAP Account',
};

export default Page;
