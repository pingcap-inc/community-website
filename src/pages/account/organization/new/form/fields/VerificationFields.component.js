import React, { useEffect, useRef } from 'react';
import { useFormikContext } from 'formik';
import { Radio, Form as AntForm } from 'formik-antd';

import EmailVerificationOption from './EmailVerificationOption.component';
import IncumbencyCertOption from './IncumbencyCertOption.component';
import data from '../form.data';

const { verificationType } = data.form;

// reset form state when field change
// returns the value of the field
// TODO: this hook could be reused in other forms
const useFormikFieldAsOption = (fieldName) => {
  const { resetForm, values } = useFormikContext();
  const type = values[fieldName];

  const localState = useRef({});

  useEffect(() => {
    Object.assign(localState.current, values);
  }, [localState, values]);

  useEffect(() => {
    resetForm({ values: localState.current });
  }, [localState, resetForm, type]);

  return type;
};

const VerificationFields = () => {
  const type = useFormikFieldAsOption(verificationType.name);

  return (
    <>
      <AntForm.Item name={verificationType.name}>
        <Radio.Group name={verificationType.name} options={verificationType.options} value={type} />
      </AntForm.Item>
      <EmailVerificationOption hidden={type !== 0} />
      <IncumbencyCertOption hidden={type !== 1} />
    </>
  );
};
export default VerificationFields;
