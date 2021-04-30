import React, { useState } from 'react';

import { Radio, Form as AntForm } from 'formik-antd';

import EmailVerificationOption from './EmailVerificationOption.component';
import IncumbencyCertOption from './IncumbencyCertOption.component';
import data from '../form.data';

const { verificationType } = data.form;

const VerificationFields = () => {
  const [type, setType] = useState(verificationType.options[0].value);
  return (
    <>
      <AntForm.Item name={verificationType.name}>
        <Radio.Group
          name={verificationType.name}
          options={verificationType.options}
          onChange={(e) => setType(e.target.value)}
          value={type}
        />
      </AntForm.Item>
      <EmailVerificationOption hidden={type !== 0} />
      <IncumbencyCertOption hidden={type !== 1} />
    </>
  );
};
export default VerificationFields;
