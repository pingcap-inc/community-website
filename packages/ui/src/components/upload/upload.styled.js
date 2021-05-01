import styled from 'styled-components';
import { Button as AntButton, Upload as AntUpload } from 'antd';

export const Upload = styled(AntUpload)`
  display: block;

  .ant-upload {
    display: block;

    .ant-btn {
      text-align: left;
    }
  }
`;

export const FullWidthButton = styled(AntButton)`
  width: 100%;
`;
