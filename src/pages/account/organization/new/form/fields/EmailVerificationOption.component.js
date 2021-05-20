import React, { useRef } from 'react';
import { Col, Row, message } from 'antd';
import { Form as AntForm, Input } from 'formik-antd';
import { api } from '@tidb-community/datasource';
import { useFormikContext } from 'formik';
import { useSize } from 'ahooks';
import { withVerifyCode, utils } from '@tidb-community/ui';

import data from '../form.data';

const { organizationEmail } = data.form.verificationType;

const VerifyCodeInput = withVerifyCode(Input);

// sendEmail must returns a promise.
const EmailVerificationOption = ({ hidden }) => {
  const ref = useRef();
  const size = useSize(ref);

  const isSmall = size.width <= 538;

  const { values, errors, touched, setFieldError, setFieldTouched } = useFormikContext();

  const sendEmail = () =>
    api.orgs.enroll.sendCode({ email: values[organizationEmail.email.name] }).catch((err) => {
      if ('errors' in err) {
        const { errors } = err;
        for (const key in errors) {
          if (errors.hasOwnProperty(key)) {
            setFieldTouched(key, true, false);
            setFieldError(key, errors[key][0]);
          }
        }
      } else {
        message.warn(utils.errors.getErrorMessage(err));
      }
    });

  return (
    <Row gutter={16} ref={ref}>
      <Col span={isSmall ? 24 : 14}>
        <AntForm.Item name={organizationEmail.email.name} hidden={hidden}>
          <Input {...organizationEmail.email} />
        </AntForm.Item>
      </Col>
      <Col span={isSmall ? 24 : 10}>
        <AntForm.Item name={organizationEmail.verificationCode.name} hidden={hidden}>
          <VerifyCodeInput
            {...organizationEmail.verificationCode}
            buttonDisabled={!touched[organizationEmail.email.name] || errors[organizationEmail.email.name]}
            sendVerifyCode={sendEmail}
          />
        </AntForm.Item>
      </Col>
    </Row>
  );
};

export default EmailVerificationOption;
