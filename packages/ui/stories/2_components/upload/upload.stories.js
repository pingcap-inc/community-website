import React from 'react';
import { Upload } from '@tidb-community/ui';
import { UploadOutlined } from '@ant-design/icons';

import { getTitle } from '../utils';

export default {
  title: getTitle('Upload'),
  component: Upload,
};

const Template = ({
  placeholder,
  uploadSuccess,
  onFileUploadSucceed = () => {},
  onFileUploadFailed = () => {},
  onFileRemoved = () => {},
  buttonSize = 'small',
  icon = <UploadOutlined />,
  ...args
}) => {
  const mockUpload = ({ onProgress }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        onProgress({ percent: 25 });
        setTimeout(() => {
          onProgress({ percent: 75 });
          setTimeout(() => {
            onProgress({ percent: 100 });
            if (uploadSuccess) {
              resolve();
            } else {
              reject('failed');
            }
          }, 1250);
        }, 1250);
      }, 1250);
    });
  };
  return (
    <div>
      <Upload
        placeholder={placeholder}
        upload={mockUpload}
        onFileUploadSucceed={onFileUploadSucceed()}
        onFileUploadFailed={onFileUploadFailed()}
        onFileRemoved={onFileRemoved()}
        buttonSize={buttonSize}
        icon={icon}
        {...args}
      />
    </div>
  );
};

export const UploadFile = Template.bind({});

UploadFile.args = {
  placeholder: '上传文件',
  uploadSuccess: true,
};
