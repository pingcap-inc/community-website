import React, { useEffect, useState } from 'react';
import { withLayout } from '@tidb-community/common';
import { Skeleton } from 'antd';
import { useLocation } from 'react-router-dom';

import { forgetSendCode, forgetVerifyCode, forgetResetPassword, canForgetResetPassword } from '~/api';
import _SendVerifyCode from './send-verify-code';
import _Check from './check';
import _SetNewPassword from './set-new-password';
import _Success from './success';
import { RESET_PASSWORD_STATE } from './reset-password.constants';
import { SimpleLayout } from '~/layout';
import { identifier as identifierField } from '~/form/fields';

const _Loading = () => <Skeleton active />;
_Loading.Layout = SimpleLayout;
_Loading.layoutProps = {
  headTitle: '重置密码 | PingCAP Account',
};

const Loading = withLayout(_Loading);
const SendVerifyCode = withLayout(_SendVerifyCode);
const Check = withLayout(_Check);
const SetNewPassword = withLayout(_SetNewPassword);
const Success = withLayout(_Success);

const Page = ({ children, ...props }) => {
  const [state, setState] = useState(RESET_PASSWORD_STATE.LOADING);
  const [identifier, setIdentifier] = useState('');
  const location = useLocation();

  useEffect(() => {
    canForgetResetPassword().then((canResetPassword) => {
      if (canResetPassword) {
        setState(RESET_PASSWORD_STATE.SET_NEW_PASSWORD);
      } else {
        setState(RESET_PASSWORD_STATE.SEND_VERIFY_CODE);
      }
    });
  }, []);

  const onSendVerifyCode = async (data) => {
    await forgetSendCode(data);
    setState(RESET_PASSWORD_STATE.CHECK);
    setIdentifier(data[identifierField.name]);
  };

  const onCheck = async (data) => {
    await forgetVerifyCode({ ...data, [identifierField.name]: identifier });
    setState(RESET_PASSWORD_STATE.SET_NEW_PASSWORD);
  };

  const onSetNewPassword = async (data) => {
    await forgetResetPassword(data);
    setState(RESET_PASSWORD_STATE.SUCCESS);
  };

  switch (state) {
    case RESET_PASSWORD_STATE.LOADING:
      return <Loading />;
    case RESET_PASSWORD_STATE.SEND_VERIFY_CODE:
      return <SendVerifyCode onSubmit={onSendVerifyCode} location={location} />;
    case RESET_PASSWORD_STATE.CHECK:
      return <Check onSubmit={onCheck} location={location} />;
    case RESET_PASSWORD_STATE.SET_NEW_PASSWORD:
      return <SetNewPassword onSubmit={onSetNewPassword} location={location} />;
    case RESET_PASSWORD_STATE.SUCCESS:
      return <Success location={location} />;
    default:
      return <div />;
  }
};

export default Page;
