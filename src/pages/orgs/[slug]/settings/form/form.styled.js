import styled from 'styled-components';
import { Upload as AntUpload } from 'antd';
import { colors, mixins } from '@tidb-community/ui';

export const Row = styled.div`
  display: flex;
  align-items: flex-start;

  .ant-form-item {
    flex: 1;
  }
`;

export const Upload = styled(AntUpload)`
  width: auto;
  margin: 0;
  margin-right: 16px;

  .ant-upload {
    ${mixins.reset()};
    ${mixins.size('64px')};
    position: relative;
    border-radius: 50%;
    display: inline-block !important;
    overflow: hidden;
    border: none;

    .anticon {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -12px;
      margin-top: -12px;

      svg {
        ${mixins.size('24px')}
        color: ${colors.M1};
      }
    }
  }
`;

export const Logo = styled.img`
  width: 100%;
`;
