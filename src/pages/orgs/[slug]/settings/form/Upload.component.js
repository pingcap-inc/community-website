import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { message } from 'antd';

import * as Styled from './form.styled';

const Upload = ({ logo, name, lang }) => {
  const props = {
    listType: 'picture-card',
    showUploadList: false,

    beforeUpload: (file) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
      }

      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
      }

      return isJpgOrPng && isLt2M;
    },

    action: (file) => console.log(file),
  };

  return (
    <Styled.Upload {...props}>
      {logo && <Styled.Logo alt={name} src={logo} />}
      <UploadOutlined />
    </Styled.Upload>
  );
};

export default Upload;
