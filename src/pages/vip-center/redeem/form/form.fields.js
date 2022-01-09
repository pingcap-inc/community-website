import { utils } from '@tidb-community/common';
import { getFormData } from '@tidb-community/datasource';

const formData = getFormData();
const { personalPositions } = formData.org.enums;
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
    placeholder: '详细地址',
    maxLength: 128,
    labelInValue: false,
    validate: (value) => {
      if (!value) {
        return '请输入详细地址';
      }
      return null;
    },
  },
  comment: {
    name: 'comment',
    placeholder: '订单备注',
    maxLength: 128,
    labelInValue: false,
  },
};

export const schema = buildSchema(fields);
