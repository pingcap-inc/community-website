import React from 'react';
import { Radio, Form as AntForm } from 'formik-antd';
import { utils } from '@tidb-community/common';

import EmailVerificationOption from './EmailVerificationOption.component';
import IncumbencyCertOption from './IncumbencyCertOption.component';
import data from '../form.data';

const { verificationType } = data.form;
const { useFormikFieldAsOption } = utils.form;

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
