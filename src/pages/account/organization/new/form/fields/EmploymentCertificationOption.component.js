import React from 'react';
import { Form } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import * as Styled from '../form.styled';
import data from '../form.data';

const { employmentCertification } = data.form.verificationType;

const EmploymentCertificationOption = () => {
  const uploadProps = {};

  return (
    <Form.Item name={employmentCertification.name} extra={employmentCertification.extraText}>
      <Styled.Upload {...uploadProps}>
        <Styled.FullWidthButton
          size='small'
          icon={<UploadOutlined />}
        >
          {employmentCertification.uploadFileText}
        </Styled.FullWidthButton>
      </Styled.Upload>
    </Form.Item>
  );
};

export default EmploymentCertificationOption;
