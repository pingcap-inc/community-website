import React, { useRef } from 'react';

import { withVerifyCode } from '@tidb-community/ui';
import { api } from '@tidb-community/datasource';
import data from '../form.data';
import { Col, Row } from 'antd';
import { Form as AntForm, Input } from 'formik-antd';
import { useSize } from 'ahooks';
import { useFormikContext } from 'formik';

const { organizationEmail } = data.form.verificationType;

const VerifyCodeInput = withVerifyCode(Input);

// sendEmail must returns a promise.
const EmailVerificationOption = ({ hidden }) => {
  const ref = useRef();
  const size = useSize(ref);

  const isSmall = size.width <= 538;

  const { values } = useFormikContext();

  const sendEmail = () => api.org.enroll.sendCode({ email: values[organizationEmail.email.name] });

  return (
    <Row gutter={16} ref={ref}>
      <Col span={isSmall ? 24 : 14}>
        <AntForm.Item name={organizationEmail.email.name} hidden={hidden}>
          <Input {...organizationEmail.email} />
        </AntForm.Item>
      </Col>
      <Col span={isSmall ? 24 : 10}>
        <AntForm.Item name={organizationEmail.verificationCode.name} hidden={hidden}>
          <VerifyCodeInput {...organizationEmail.verificationCode} sendVerifyCode={sendEmail} />
        </AntForm.Item>
      </Col>
    </Row>
  );
};

export default EmailVerificationOption;
