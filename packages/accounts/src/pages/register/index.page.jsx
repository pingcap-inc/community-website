import React from 'react';
import { Checkbox, Form, FormItem, Input } from 'formik-antd';
import { Formik } from 'formik';
import Link from '@tidb-community/ui/components/link';
import withVerifyCode from '@tidb-community/ui/components/verifyCodeInput';
import { wrapFormikSubmitFunction } from '@tidb-community/common/utils/form';
import { parse } from 'querystring';
import { useLocation } from 'react-router-dom';

import { Flex } from '~/components/layout';
import { RouteLink } from '~/components/links';
import { SimpleLayout } from '~/layout';
import { SubmitButton, PhoneInputPrefix } from '~/components/form';
import { signup as callSignup } from '~/api';
import { form, formSchema, initialValues } from './register.form';
import { handleError } from '~/utils/errors';

const { phone, verifyCode, email, company, agreements } = form;

const VerifyInput = withVerifyCode(Input);

const { privacy, prefixText: agreementsPrefixText, ...agreementsProps } = agreements;

const Page = () => {
  const location = useLocation();
  const query = parse(location.search.slice(1));

  const signup = wrapFormikSubmitFunction((data) => {
    const redirectTo = query.redirect_to || '';
    return callSignup({ ...data, redirect_to: redirectTo }).then(({ redirectTo }) => {
      window.open(redirectTo, '_top');
    });
  }, handleError);

  const sendVerifyCode = wrapFormikSubmitFunction(verifyCode.sendVerifyCode, handleError, true);

  return (
    <Formik validationSchema={formSchema} initialValues={initialValues} onSubmit={signup}>
      {({ values, errors, setErrors, setTouched }) => (
        <Form>
          <FormItem name={company.name}>
            <Input {...company} size="large" />
          </FormItem>
          <FormItem name={email.name}>
            <Input {...email} size="large" />
          </FormItem>
          <FormItem name={phone.name}>
            <Input prefix={<PhoneInputPrefix>+86</PhoneInputPrefix>} {...phone} size="large" />
          </FormItem>
          <FormItem name={verifyCode.name}>
            <VerifyInput
              {...verifyCode}
              sendVerifyCode={() => sendVerifyCode(values[phone.name], { setErrors, setTouched })}
              buttonDisabled={errors[phone.name] || !values[phone.name]}
              size="large"
            />
          </FormItem>
          <Flex>
            <FormItem name={agreements.name}>
              <Checkbox {...agreementsProps}>
                {agreementsPrefixText}
                <Link href={privacy.url}>{privacy.title}</Link>
              </Checkbox>
            </FormItem>
            <RouteLink to={`/login${location.search}`} style={{ lineHeight: '32px' }}>
              已有账号？去登录
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
  headTitle: '注册 | PingCAP Account',
};

export default Page;
