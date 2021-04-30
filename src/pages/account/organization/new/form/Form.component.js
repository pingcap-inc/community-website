import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';
import { Form as AntForm } from 'formik-antd';
import { Formik } from 'formik';

import * as Styled from './form.styled';
import BasicFields from './fields/BasicFields.component';
import VerificationFields from './fields/VerificationFields.component';
import data from './form.data';
import Agreements from './fields/Agreements.component';

const { submitBtnTitle, formScheme, formInitialValues } = data;

const Form = () => {
  const onSubmit = (formData) => {
    console.log(formData);
    return new Promise((resolve, reject) => setTimeout(() => reject('todo implement'), 1000));
  };

  return (
    <Styled.FormContainer>
      <Styled.FormTitleContainer>
        <Col>
          <Styled.FormTitle>企业会员认证</Styled.FormTitle>
        </Col>
        <Col>
          <Styled.ContactUsButton type="link" size="small">
            联系我们
          </Styled.ContactUsButton>
        </Col>
      </Styled.FormTitleContainer>
      <Formik initialValues={formInitialValues} validationSchema={formScheme} validateOnChange onSubmit={onSubmit}>
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
