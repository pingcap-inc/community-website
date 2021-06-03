// Common field definitions shared among forms
import * as Yup from 'yup';

export const code = ({ name = 'code' } = {}) => ({
  name,
  placeholder: '6位验证码',
  validator: Yup.string()
    .length(6, ({ length }) => `请输入${length}位验证码`)
    .required('验证码不可为空'),
  initialValue: '',
  sendVerifyCodeBtnText: '发送验证码',
  limitSeconds: 60000,
  countDownFormatter: (ms) => `${Math.round(ms / 1000)}s`,
});

export const newPassword = ({ name = 'new_password', placeholder = '请输入新密码' } = {}) => ({
  name,
  placeholder,
  validator: Yup.string().required('密码不可为空').min(8, '密码最少为8个字符'),
  initialValue: '',
  type: 'password',
});

export const confirmPassword = ({ name = 'confirm_password', placeholder = '请再次输入新密码' } = {}) => ({
  name,
  placeholder,
  validator: Yup.string()
    .required('密码不可为空')
    .oneOf([Yup.ref('new_password')], '两次密码输入不相同'),
  initialValue: '',
  type: 'password',
});
