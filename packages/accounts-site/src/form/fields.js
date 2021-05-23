import * as Yup from 'yup';

export const mobile = {
  name: 'mobile',
  placeholder: '请输入手机号',
  validator: Yup.string()
    .length(11, ({ length }) => `手机号长度必须为${length}位`)
    .required('手机号不可为空'),
  initialValue: '',
};

export const verifyCode = {
  name: 'verify_code',
  placeholder: '6位验证码',
  validator: Yup.string()
    .length(6, ({ length }) => `请输入${length}位验证码`)
    .required('文件不可为空'),
  initialValue: '',
  sendVerifyCodeBtnText: '发送验证码',
  limitSeconds: 120000,
  countDownFormatter: (ms) => `${Math.round(ms / 1000)}s`,
  sendVerifyCode: () => new Promise((resolve) => setTimeout(resolve, 1000)),
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
