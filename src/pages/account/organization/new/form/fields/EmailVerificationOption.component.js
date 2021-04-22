import React, { useRef, useState } from 'react';

import data from '../form.data';
import { Col, Form as AntForm, Input, Row } from 'antd';
import * as Styled from '../form.styled';
import { errors } from '@tidb-community/ui/utils';
import { useSize } from 'ahooks';

// sendEmail must returns a promise.
const EmailVerificationOption = ({ sendEmail }) => {
  const { organizationEmail } = data.form.verificationType;

  const [sending, setSending] = useState(false);
  const [sendErr, setSendErr] = useState(null);

  const ref = useRef()
  const size = useSize(ref);

  const isSmall = size.width <= 538;

  const onSendEmailClicked = () => {
    if (sending) {
      return;
    }
    setSending(true);
    sendEmail()
      .then(() => setSendErr(null))
      .catch(err => {
        setSendErr(err);
      })
      .finally(() => setSending(false));
  };

  return (
    <Row gutter={16} ref={ref}>
      <Col span={isSmall ? 24 : 14}>
        <AntForm.Item name={organizationEmail.email.name}>
          <Input placeholder={organizationEmail.email.placeholder} />
        </AntForm.Item>
      </Col>
      <Col span={isSmall ? 24 : 10}>
        <AntForm.Item
          name={organizationEmail.verificationCode.name}
          validateStatus={sending ? 'validating' : sendErr ? 'error' : 'success'}
          help={errors.getErrorMessage(sendErr)}
        >
          <Input
            placeholder={organizationEmail.verificationCode.placeholder}
            suffix={
              <Styled.SendEmailButton
                loading={sending}
                type='link'
                onClick={onSendEmailClicked}
                size='small'
              >
                {organizationEmail.verificationCode.sendBtnTitle}
              </Styled.SendEmailButton>
            }
          />
        </AntForm.Item>
      </Col>
    </Row>
  );
};

export default EmailVerificationOption;
