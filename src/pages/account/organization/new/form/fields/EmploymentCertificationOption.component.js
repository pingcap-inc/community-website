import React from 'react';
import { Form } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import * as Styled from '../form.styled';
import data from '../form.data';

const { employmentCertification } = data.form.verificationType;

// uploadIncumbencyCert 不传参数代表删除文件
const EmploymentCertificationOption = ({ buildFormItemProps, uploadIncumbencyCert }) => {
  const uploadProps = {
    maxCount: 1,
    customRequest({ file, filename, onProgress, onSuccess, onError }) {
      uploadIncumbencyCert({
        file,
        filename,
        onProgress,
      })
        .then(() => {
          onSuccess();
        })
        .catch((err) => {
          onError(err);
        });
    },
    onRemove: () => {
      return uploadIncumbencyCert(undefined).then(() => true);
    },
  };

  return (
    <>
      <Form.Item {...buildFormItemProps(employmentCertification.name)} extra={employmentCertification.extraText}>
        <Styled.Upload {...uploadProps}>
          <Styled.FullWidthButton size="small" icon={<UploadOutlined />}>
            {employmentCertification.uploadFileText}
          </Styled.FullWidthButton>
        </Styled.Upload>
      </Form.Item>
      <Form.Item hidden name={employmentCertification.idName}>
        <input />
      </Form.Item>
    </>
  );
};

export default EmploymentCertificationOption;
