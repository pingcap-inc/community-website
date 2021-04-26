import React from 'react';
import { Form as AntForm, Radio } from 'antd';

import EmailVerificationOption from './EmailVerificationOption.component';
import EmploymentCertificationOption from './EmploymentCertificationOption.component';
import data from '../form.data';

const { verificationType } = data.form;

const VerificationOptions = ({ type, sendEmail, uploadIncumbencyCert, buildFormItemProps }) => {
  if (type === 1) {
    return (
      <EmploymentCertificationOption
        buildFormItemProps={buildFormItemProps}
        uploadIncumbencyCert={uploadIncumbencyCert}
      />
    );
  } else {
    return <EmailVerificationOption sendEmail={sendEmail} buildFormItemProps={buildFormItemProps} />;
  }
};

const VerificationFields = ({ type, sendEmail, uploadIncumbencyCert, buildFormItemProps }) => {
  return (
    <>
      <AntForm.Item name={verificationType.name}>
        <Radio.Group>
          {verificationType.choices.map(({ title, value }) => (
            <Radio value={value} key={value}>
              {title}
            </Radio>
          ))}
        </Radio.Group>
      </AntForm.Item>
      <VerificationOptions
        type={type}
        sendEmail={sendEmail}
        uploadIncumbencyCert={uploadIncumbencyCert}
        buildFormItemProps={buildFormItemProps}
      />
    </>
  );
};

export default VerificationFields;
