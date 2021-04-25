import React from 'react';
import { Form as AntForm, Radio } from 'antd';

import EmailVerificationOption from './EmailVerificationOption.component';
import EmploymentCertificationOption from './EmploymentCertificationOption.component';
import data from '../form.data';

const { verificationType } = data.form;

const renderVerificationOptions = (type) => {
  if (type === 1) {
    return <EmploymentCertificationOption />;
  } else {
    return (
      <EmailVerificationOption
        sendEmail={() => new Promise((resolve, reject) => setTimeout(() => reject('no'), 1000))}
      />
    );
  }
};

const VerificationFields = ({ type }) => {
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
      {renderVerificationOptions(type)}
    </>
  );
};

export default VerificationFields;
