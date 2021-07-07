import React from 'react';
import { Col } from 'antd';
import { Form as AntForm } from 'formik-antd';
import { Formik } from 'formik';
import { api } from '@tidb-community/datasource';

import * as Styled from './form.styled';
import Agreements from './fields/Agreements.component';
import BasicFields from './fields/BasicFields.component';
import VerificationFields from './fields/VerificationFields.component';
import data from './form.data';
import { form as formUtils } from '~/utils';

const { submitBtnTitle, formSchema, formInitialValues } = data;

const Form = ({ onSubmit: onSubmitCallback }) => {
  const onSubmit = formUtils.wrapFormikSubmitFunction(({ company, company_base, ...params }) =>
    api.orgs
      .enroll({
        company: company.value,
        company_base: company_base[1],
        ...params,
      })
      .then(onSubmitCallback)
  );

  return (
    <Styled.FormContainer>
      <Styled.FormTitleContainer>
        <Col>
          <Styled.FormTitle>团队认证</Styled.FormTitle>
        </Col>
        <Col>
          <Styled.ContactUsButton type="link" href="mailto:community@tidb.io" size="small">
            联系我们
          </Styled.ContactUsButton>
        </Col>
      </Styled.FormTitleContainer>
      <Formik initialValues={formInitialValues} validationSchema={formSchema} onSubmit={onSubmit}>
        <AntForm>
          <BasicFields />
          <VerificationFields />
          <Agreements />
          <Styled.FullWidthSubmitButton>{submitBtnTitle}</Styled.FullWidthSubmitButton>
        </AntForm>
      </Formik>
    </Styled.FormContainer>
  );
};

export default Form;
