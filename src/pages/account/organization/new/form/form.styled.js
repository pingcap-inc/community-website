import styled from 'styled-components';
import { Button as AntButton, Row as AntRow } from 'antd';
import { SubmitButton } from 'formik-antd';
import { mixins } from '@tidb-community/ui';

export const FormContainer = styled.div`
  box-sizing: border-box;
  margin: auto;
  max-width: 540px;
`;

export const FormTitleContainer = styled(AntRow).attrs({
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

export const FullWidthSubmitButton = styled(SubmitButton)`
  width: 100%;
`;
