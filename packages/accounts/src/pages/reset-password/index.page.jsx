import React, { useState } from 'react';
import { withLayout } from '@tidb-community/common';

import _SendVerifyCode from './send-verify-code';
import _Check from './check';
import _SetNewPassword from './set-new-password';
import _Success from './success';
import { RESET_PASSWORD_STATE } from './reset-password.constants';

const SendVerifyCode = withLayout(_SendVerifyCode);
const Check = withLayout(_Check);
const SetNewPassword = withLayout(_SetNewPassword);
const Success = withLayout(_Success);

const Page = ({ children, ...props }) => {
  const [state, setState] = useState(RESET_PASSWORD_STATE.SEND_VERIFY_CODE);

  const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

  const onSendVerifyCode = ({ identifier }) => {
    return wait().then(() => setState(RESET_PASSWORD_STATE.CHECK));
  };

  const onCheck = ({ verify_code }) => {
    return wait().then(() => setState(RESET_PASSWORD_STATE.SET_NEW_PASSWORD));
  };

  const onSetNewPassword = ({ password, confirmPassword }) => {
    return wait().then(() => setState(RESET_PASSWORD_STATE.SUCCESS));
  };

  switch (state) {
    case RESET_PASSWORD_STATE.SEND_VERIFY_CODE:
      return <SendVerifyCode onSubmit={onSendVerifyCode} />;
    case RESET_PASSWORD_STATE.CHECK:
      return <Check onSubmit={onCheck} />;
    case RESET_PASSWORD_STATE.SET_NEW_PASSWORD:
      return <SetNewPassword onSubmit={onSetNewPassword} />;
    case RESET_PASSWORD_STATE.SUCCESS:
      return <Success />;
    default:
      return <div />;
  }
};

export default Page;
