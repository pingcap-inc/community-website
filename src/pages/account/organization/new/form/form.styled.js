import { colors, mixins } from '@tidb-community/ui';
import styled from 'styled-components';
import { Button as AntButton, Upload as AntUpload, Row as AntRow } from 'antd';

export const FormContainer = styled.div`
  margin: auto;
  max-width: 540px;
`;

export const FormTitleContainer = styled(AntRow)
  .attrs({
    justify: 'space-between',
    align: 'bottom',
  })`
  margin-bottom: 16px;
  line-height: 24px;
`;

export const FormTitle = styled.h2`
  ${mixins.typography(2)};
  line-height: 24px;
  margin: 0;
`;

export const ContactUsButton = styled(AntButton)`
  padding-right: 0 !important;
  height: 24px !important;
  line-height: 22px !important;
`;

export const SendEmailButton = styled(AntButton)`
  height: 22px !important;
  line-height: 22px !important;
  padding: 0 4px !important;

  span {
    ${mixins.typography('p2')}
    &:hover {
      color: ${colors.B1}
    }
  }

  &::before {
    background-color: transparent;
  }
`;

export const FullWidthButton = styled(AntButton)`
  width: 100%;
`;

export const Upload = styled(AntUpload)`
  display: block;

  .ant-upload {
    display: block;

    .ant-btn {
      text-align: left;
    }
  }
`;
