import * as Yup from 'yup';
import { phoneLoginCheck } from '~/api';
import { createYupRemoteValidator } from '@tidb-community/common/utils/form';

createYupRemoteValidator(Yup.string, 'checkPhone', (phone) => phoneLoginCheck({ phone }));

export const phone = {
  name: 'phone',
  placeholder: '请输入手机号',
  validator: Yup.string()
    .length(11, ({ length }) => `手机号长度必须为${length}位`)
    .required('手机号不可为空')
    .when(['phone'], {
      is: function (phone) {
        return phone && phone.length === 11;
      },
      then: (current) => current.checkPhone(),
    }),
  initialValue: '',
};

export const identifier = {
  name: 'identifier',
  placeholder: '请输入邮箱或手机号',
  validator: Yup.string().required('邮箱或手机号不能为空'),
  initialValue: '',
};

export const verifyCode = {
  name: 'verify_code',
  placeholder: '6位验证码',
  validator: Yup.string()
    .length(6, ({ length }) => `请输入${length}位验证码`)
    .required('验证码不可为空'),
  initialValue: '',
  sendVerifyCodeBtnText: '发送验证码',
  limitSeconds: 60000,
  countDownFormatter: (ms) => `${Math.round(ms / 1000)}s`,
};

export const password = {
  name: 'password',
  placeholder: '请输入密码',
  validator: Yup.string().required('密码不可为空'),
  initialValue: '',
};

export const confirmPassword = {
  name: 'confirm_password',
  placeholder: '请再次输入密码',
  validator: Yup.string().oneOf([Yup.ref('password')], '两次密码输入不相同'),
  initialValue: '',
};

export const email = {
  name: 'email',
  placeholder: '请输入邮箱',
  validator: Yup.string().email('请输入有效的邮箱').required('密码不可为空'),
  initialValue: '',
};

export const company = {
  name: 'company',
  placeholder: '请输入所在的公司',
  validator: Yup.string()
    .min(4, ({ min }) => `最少输入${min}个字符`)
    .required('公司不能为空'),
};
