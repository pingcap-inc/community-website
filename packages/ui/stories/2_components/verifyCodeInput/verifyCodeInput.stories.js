import React from 'react';
import { withVerifyCode } from '@tidb-community/ui';

import { Input } from 'antd';
import { getTitle } from '../utils';

export default {
  title: getTitle('withVerifyCode'),
  component: withVerifyCode,
};

const VerifyCodeInput = withVerifyCode(Input);

const Template = ({ limitSeconds, sendVerifyCodeBtnText }) => {
  const sendVerifyCode = () => {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <VerifyCodeInput
      sendVerifyCode={sendVerifyCode}
      limitSeconds={limitSeconds}
      sendVerifyCodeBtnText={sendVerifyCodeBtnText}
      countDownFormatter={(ms) => `${Math.round(ms / 1000)}s`}
    />
  );
};

export const WrapInput = Template.bind({});

WrapInput.args = {
  limitSeconds: 120000,
  sendVerifyCodeBtnText: 'SEND',
};
