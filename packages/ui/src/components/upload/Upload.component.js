import PropTypes from 'prop-types';
import React from 'react';
import { UploadOutlined } from '@ant-design/icons';

import * as Styled from './upload.styled';

const Upload = ({
  placeholder,
  upload,
  onFileUploadSucceed = () => {},
  onFileUploadFailed = () => {},
  onFileRemoved = () => {},
  buttonSize = 'small',
  icon = <UploadOutlined />,
  ...extraUploadProps
}) => {
  const uploadProps = {
    ...extraUploadProps,
    maxCount: 1,
    customRequest({ file, filename, onProgress, onSuccess, onError }) {
      upload({
        file,
        filename,
        onProgress,
      })
        .then((value) => {
          onFileUploadSucceed(value);
          onSuccess();
        })
        .catch((err) => {
          onError(err);
          onFileUploadFailed(err);
        });
    },
    onRemove: () => {
      onFileRemoved();
      return Promise.resolve(true);
    },
  };

  return (
    <Styled.Upload {...uploadProps}>
      <Styled.FullWidthButton size="small" icon={<UploadOutlined />}>
        {placeholder}
      </Styled.FullWidthButton>
    </Styled.Upload>
  );
};

Upload.propTypes = {
  placeholder: PropTypes.string,
  upload: PropTypes.func.isRequired,
  onFileUploadSucceed: PropTypes.func,
  onFileUploadFailed: PropTypes.func,
  onFileRemoved: PropTypes.func,
  buttonSize: PropTypes.string,
  icon: PropTypes.node,
};

export default Upload;
