import * as Styled from './form.styled';
import React from 'react';
import { UploadOutlined } from '@ant-design/icons';

const Upload = ({ logo, name }) => (
  <Styled.Upload listType="picture-card" showUploadList={false}>
    {logo && <Styled.Logo alt={name} src={logo} />}
    <UploadOutlined />
  </Styled.Upload>
);

export default Upload;
