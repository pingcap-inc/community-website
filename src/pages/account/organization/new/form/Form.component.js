import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form as AntForm, Checkbox, Col } from 'antd';
import { Link } from '@tidb-community/ui';

import * as Styled from './form.styled';
import BasicFields from './fields/BasicFields.component';
import VerificationFields from './fields/VerificationFields.component';
import data from './form.data';
import { useCustomFormItems } from './form.hooks';

const { verificationType, agreements, submitBtnTitle } = data.form;

const Form = ({ submit, sendEmail, uploadIncumbencyCert }) => {
  const [form] = AntForm.useForm();
  const [verificationTypeValue, setVerificationTypeValue] = useState();

  const { buildFormItemProps, resetValidationErrors, parseApiError } = useCustomFormItems();
  const [submitting, setSubmitting] = useState(false);

  const onFormValuesChange = (formData) => {
    const { [verificationType.name]: newVerificationTypeValue } = formData;
    if (newVerificationTypeValue !== undefined && newVerificationTypeValue !== verificationTypeValue) {
      setVerificationTypeValue(newVerificationTypeValue);
    }
  };

  const onSubmit = (formData) => {
    setSubmitting(true);
    submit(formData).finally(() => {
      setSubmitting(false);
    });
  };

  const sendEmailProxy = () =>
    sendEmail(form.getFieldValue(verificationType.organizationEmail.email.name))
      .then(() =>
        resetValidationErrors([
          verificationType.organizationEmail.email.name,
          verificationType.organizationEmail.verificationCode.name,
        ])
      )
      .catch((err) => {
        if (err.errors) {
          parseApiError(err);
        } else {
          return Promise.reject(err);
        }
      });

  const uploadIncumbencyCertProxy = (params) => {
    if (params === undefined) {
      form.setFieldsValue({ [verificationType.employmentCertification.idName]: undefined });
      return Promise.resolve();
    } else {
      return uploadIncumbencyCert(params)
        .then((fileId) => {
          resetValidationErrors([verificationType.employmentCertification.name]);
          form.setFieldsValue({ [verificationType.employmentCertification.idName]: fileId });
        })
        .catch((err) => {
          if (err.errors) {
            parseApiError(err);
          }
          return Promise.reject(err);
        });
    }
  };

  const initialValues = {
    [agreements.name]: false,
    [verificationType.name]: verificationType.choices[0].value,
  };

  return (
    <Styled.FormContainer>
      <Styled.FormTitleContainer>
        <Col>
          <Styled.FormTitle>企业会员认证</Styled.FormTitle>
        </Col>
        <Col>
          <Styled.ContactUsButton type="link" size="small">
            联系我们
          </Styled.ContactUsButton>
        </Col>
      </Styled.FormTitleContainer>
      <AntForm form={form} initialValues={initialValues} onValuesChange={onFormValuesChange} onFinish={onSubmit}>
        <BasicFields buildFormItemProps={buildFormItemProps} />
        <VerificationFields
          type={verificationTypeValue}
          sendEmail={sendEmailProxy}
          uploadIncumbencyCert={uploadIncumbencyCertProxy}
          buildFormItemProps={buildFormItemProps}
        />
        <AntForm.Item {...buildFormItemProps(agreements.name)} valuePropName="checked">
          <Checkbox>
            {agreements.prefixText}
            <Link href={agreements.sla.link}>{agreements.sla.title}</Link>
            <Link href={agreements.privacy.link}>{agreements.privacy.title}</Link>
          </Checkbox>
        </AntForm.Item>
        <Styled.FullWidthButton type="primary" htmlType="submit" loading={submitting}>
          {submitBtnTitle}
        </Styled.FullWidthButton>
      </AntForm>
    </Styled.FormContainer>
  );
};

Form.propTypes = {
  submit: PropTypes.func.isRequired,
  sendEmail: PropTypes.func.isRequired,
  uploadIncumbencyCert: PropTypes.func.isRequired,
};

export default Form;
