import React, { useState } from 'react';
import { Radio, Form as AntForm } from 'formik-antd';
import { useFormikContext } from 'formik';

import EmailVerificationOption from './EmailVerificationOption.component';
import IncumbencyCertOption from './IncumbencyCertOption.component';
import data from '../form.data';

const { verificationType } = data.form;

const VerificationFields = () => {
  const [type, setType] = useState(verificationType.options[0].value);

  const { resetForm, values } = useFormikContext();

  const onTypeChange = (e) => {
    setType(e.target.value);
    resetForm({ values });
  };

  return (
    <>
      <AntForm.Item name={verificationType.name}>
        <Radio.Group
          name={verificationType.name}
          options={verificationType.options}
          onChange={onTypeChange}
          value={type}
        />
      </AntForm.Item>
      <EmailVerificationOption hidden={type !== 0} />
      <IncumbencyCertOption hidden={type !== 1} />
    </>
  );
};
export default VerificationFields;
