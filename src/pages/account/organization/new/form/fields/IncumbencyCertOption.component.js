import React from 'react';

import { useFormikContext } from 'formik';
import { Upload } from '@tidb-community/ui';
import { Form } from 'formik-antd';
import data from '../form.data';
import { api } from '@tidb-community/datasource';

const { incumbencyCert } = data.form.verificationType;

// uploadIncumbencyCert 不传参数代表删除文件
const IncumbencyCertOption = ({ hidden }) => {
  const { setFieldValue } = useFormikContext();
  const setValue = (res) => setFieldValue(incumbencyCert.name, res);

  const uploadProps = {
    placeholder: incumbencyCert.uploadFileText,
    upload: ({ file, filename, onProgress }) =>
      api.org.enroll
        .uploadIncumbencyCert({
          file,
          filename,
          onUploadProgress: onProgress,
        })
        .then((res) => res.cert_id),
    onFileUploadSucceed: setValue,
    onFileRemoved: setValue,
  };

  return (
    <Form.Item name={incumbencyCert.name} extra={incumbencyCert.extraText} hidden={hidden}>
      <Upload {...uploadProps} />
      <input hidden name={incumbencyCert.name} />
    </Form.Item>
  );
};

export default IncumbencyCertOption;
