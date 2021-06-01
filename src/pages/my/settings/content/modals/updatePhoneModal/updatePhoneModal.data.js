import * as Yup from 'yup';
import { utils } from '@tidb-community/common';

const { buildInitialValues, buildSchema } = utils.form;

export const form = {
  phone: {
    name: 'phone',
    placeholder: '请输入新手机号码',
    validator: Yup.string()
      .length(11, ({ length }) => `手机号长度必须为${length}位`)
      .required('手机号不可为空'),
  },
  code: {
    name: 'code',
    placeholder: '6 位验证码',
    // validator: Yup.string()
    //   .length(6, ({ length }) => `请输入${length}位验证码`)
    //   .required('验证码不可为空'),
    initialValue: '',
    sendVerifyCodeBtnText: '获取验证码',
  },
};

export const initialValues = buildInitialValues(form);

export const schema = buildSchema(form);
