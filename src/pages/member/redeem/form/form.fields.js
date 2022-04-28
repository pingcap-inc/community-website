import { utils } from '@tidb-community/common';

const { buildSchema } = utils.form;

export const fields = {
  receiver: {
    name: 'receiver',
    placeholder: '收件人',
    maxLength: 128,
    labelInValue: false,
    validate: (value) => {
      if (!value) {
        return '请输入收件人';
      }
      return null;
    },
  },
  phoneNumber: {
    name: 'phoneNumber',
    placeholder: '手机号码',
    maxLength: 128,
    labelInValue: false,
    validate: (value) => {
      if (!value) {
        return '请输入手机号码';
      } else if (!/^1[3456789]\d{9}$/.test(value)) {
        return '请输入正确的手机号码';
      }
    },
  },
  verificationCode: {
    name: 'verificationCode',
    placeholder: '手机验证码',
    maxLength: 128,
    labelInValue: false,
    validate: (value) => {
      if (!value) {
        return '请输入手机验证码';
      } else if (!/^\d{6}$/.test(value)) {
        return '请输入正确的手机验证码';
      }
    },
  },
  address: {
    name: 'address',
    label: '详细地址',
    placeholder: '国家-省份-城市-区/县-街道-小区-楼栋号-单元室',
    maxLength: 128,
    labelInValue: false,
    validate: (value) => {
      if (!value || value === '') {
        return '请输入详细地址';
      }
      return null;
    },
  },
  comment: {
    name: 'comment',
    label: '订单备注',
    placeholder: '服装类礼品请务必备注尺码（S,M,L,XL,XXL），其他品类可填无',
    maxLength: 128,
    labelInValue: false,
    validate: (value) => {
      if (!value || value === '') {
        return '请输入订单备注';
      }
      return null;
    },
  },
};

export const schema = buildSchema(fields);
