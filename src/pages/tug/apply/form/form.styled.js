import styled from 'styled-components';
import { Button as AntButton, Row as AntRow } from 'antd';
import { colors, mixins } from '@tidb-community/ui';
import * as Styled from './form.styled';

export const FormContainer = styled.div`
  box-sizing: border-box;
  margin: auto;
  max-width: 540px;
  padding: 40px;
  background-color: rgb(247, 248, 249);
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
  margin-bottom: 28px;
`;

export const Form = styled.div``;

export const FormSubmitButton = styled(AntButton)``;

export const FormSubmitAgreement = styled.a`
  color: ${colors.B1};
`;
