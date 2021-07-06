import React from 'react';
import { Upload as AntUpload } from 'antd';

const Upload = () => (
  <AntUpload name="avatar" listType="picture-card" className="avatar-uploader" showUploadList={false}></AntUpload>
);

export default Upload;
