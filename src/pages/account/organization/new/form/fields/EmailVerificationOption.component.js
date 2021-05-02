import React, { useRef } from 'react';
import { Col, Row } from 'antd';
import { Form as AntForm, Input } from 'formik-antd';
import { api } from '@tidb-community/datasource';
import { useFormikContext } from 'formik';
import { useSize } from 'ahooks';
import { withVerifyCode } from '@tidb-community/ui';

import data from '../form.data';

const { organizationEmail } = data.form.verificationType;

const VerifyCodeInput = withVerifyCode(Input);

// sendEmail must returns a promise.
const EmailVerificationOption = ({ hidden }) => {
  const ref = useRef();
  const size = useSize(ref);

  const isSmall = size.width <= 538;

  const { values } = useFormikContext();

  const sendEmail = () => api.orgs.enroll.sendCode({ email: values[organizationEmail.email.name] });

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
