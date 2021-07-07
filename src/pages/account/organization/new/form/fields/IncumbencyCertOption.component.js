import React from 'react';
import { Form } from 'formik-antd';
import { Upload } from '@tidb-community/ui';
import { api } from '@tidb-community/datasource';
import { message } from 'antd';
import { useFormikContext } from 'formik';

import data from '../form.data';
import { errors } from '~/utils';

const { incumbencyCert } = data.form.verificationType;

const IncumbencyCertOption = ({ hidden }) => {
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const setValue = (res, shouldValidate) => setFieldValue(incumbencyCert.name, res, shouldValidate);
  const setTouched = (res) => setFieldTouched(incumbencyCert.name, res);

  const uploadProps = {
    accept: 'image/png, image/jpeg, image/jpg',
    placeholder: incumbencyCert.uploadFileText,
    upload: ({ file, onProgress }) =>
      api.orgs.enroll
        .uploadIncumbencyCert({
          file,
          onUploadProgress: onProgress,
        })
        .then((res) => res.cert_id),
    onFileUploadSucceed: setValue,
    onFileRemoved: () => {
      setValue(-1, true);
      setTouched(true);
    },
    onFileUploadFailed: (err) => {
      message.error(errors.getFirstApiErrorMsg(err), 5);
    },
  };

  return (
    <Form.Item name={incumbencyCert.name} extra={incumbencyCert.extraText} hidden={hidden}>
      <Upload {...uploadProps} />
      <input hidden name={incumbencyCert.name} />
    </Form.Item>
  );
};

export default IncumbencyCertOption;
