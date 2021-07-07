import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { message } from 'antd';

import * as Styled from './form.styled';

const Upload = ({ logo, name, lang }) => {
  const props = {
    listType: 'picture-card',
    showUploadList: false,

    beforeUpload: (file) => {
      const isJpgOrPng = ['image/jpeg', 'image/png'].includes(file.type);
      if (!isJpgOrPng) {
        message.error(lang.logoTypeError);
      }

      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error(lang.logoSizeError);
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
