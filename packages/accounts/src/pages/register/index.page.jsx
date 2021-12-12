import React from 'react';

import { Checkbox, Form, FormItem, Input, AutoComplete } from 'formik-antd';
import { Formik } from 'formik';
import { Link, withVerifyCode, RemoteAutoComplete } from '@tidb-community/ui';
import { parse } from 'querystring';
import { useLocation } from 'react-router-dom';
import { utils } from '@tidb-community/common';

import { RouteLink } from '~/components/links';
import { SimpleLayout } from '~/layout';
import { SubmitButton, PhoneInputPrefix } from '~/components/form';
import { signup as callSignup, fetchOrganizationOptions } from '~/api';
import { form, formSchema, initialValues } from './register.form';
import { handleError } from '~/utils/errors';

const { phone, verifyCode, email, company, agreements } = form;
const { wrapFormikSubmitFunction } = utils.form;

const VerifyInput = withVerifyCode(Input);

const { privacy, terms, prefixText: agreementsPrefixText, ...agreementsProps } = agreements;

const Page = () => {
  const location = useLocation();
  const query = parse(location.search.slice(1));

  const fetchOpts = {
    AutoComplete,
    fetchOptions: fetchOrganizationOptions,
  };

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
            <RemoteAutoComplete {...fetchOpts} {...company} size="large" />
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
          <FormItem name={agreements.name}>
            <Checkbox {...agreementsProps}>
              {agreementsPrefixText}
              <Link href={privacy.url}>
                <span className="no-wrap">{privacy.title}</span>
              </Link>
              <Link href={terms.url}>
                <span className="no-wrap">{terms.title}</span>
              </Link>
            </Checkbox>
          </FormItem>
          <RouteLink to={`/login${location.search}`} style={{ lineHeight: '36px' }}>
            <span className="no-wrap">已有账号？去登录</span>
          </RouteLink>
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
