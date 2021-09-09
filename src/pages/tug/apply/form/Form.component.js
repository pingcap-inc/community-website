import React from 'react';
import { Form as AntForm, Input, Select } from 'formik-antd';
import { Formik } from 'formik';

import * as Styled from './form.styled';
import data from './form.data';
// import { form as formUtils } from '~/utils';

const { form, submitBtnTitle, agreementContent, formSchema, formInitialValues } = data;
const {
  realName,
  phone,
  email,
  company,
  jobTitle,
  stageOfCompanyUseOfTidb,
  reasonForApplication,
  preferredWayOfSharing,
  rolesWantToPlay,
  wechatId,
  bio,
  channel,
  referrer,
} = form;

const Form = ({ onSubmit }) => {
  return (
    <Styled.FormContainer>
      <Styled.FormTitle>申请信息</Styled.FormTitle>
      <Styled.Form>
        <Formik initialValues={formInitialValues} validationSchema={formSchema} onSubmit={onSubmit}>
          <AntForm layout="vertical">
            <AntForm.Item name={realName.name} label={realName.placeholder} required>
              <Input {...realName} />
            </AntForm.Item>
            <AntForm.Item name={phone.name} label={phone.placeholder} required>
              <Input {...phone} />
            </AntForm.Item>
            <AntForm.Item name={email.name} label={email.placeholder} required>
              <Input {...email} />
            </AntForm.Item>
            <AntForm.Item name={company.name} label={company.placeholder} required>
              <Input {...company} />
            </AntForm.Item>
            <AntForm.Item name={jobTitle.name} label={jobTitle.placeholder} required>
              <Select {...jobTitle} />
            </AntForm.Item>
            <AntForm.Item name={stageOfCompanyUseOfTidb.name} label={stageOfCompanyUseOfTidb.placeholder} required>
              <Select {...stageOfCompanyUseOfTidb} />
            </AntForm.Item>
            <AntForm.Item name={reasonForApplication.name} label={reasonForApplication.placeholder} required>
              <Input {...reasonForApplication} />
            </AntForm.Item>
            <AntForm.Item name={preferredWayOfSharing.name} label={preferredWayOfSharing.placeholder} required>
              <Select {...preferredWayOfSharing} />
            </AntForm.Item>
            <AntForm.Item name={rolesWantToPlay.name} label={rolesWantToPlay.placeholder} required>
              <Select {...rolesWantToPlay} />
            </AntForm.Item>
            <AntForm.Item name={wechatId.name} label={wechatId.placeholder} required>
              <Input {...wechatId} />
            </AntForm.Item>
            <AntForm.Item name={bio.name} label={bio.placeholder} required>
              <Input.TextArea rows={3} {...bio} />
            </AntForm.Item>
            <AntForm.Item name={channel.name} label={channel.placeholder} required>
              <Input {...channel} />
            </AntForm.Item>
            <AntForm.Item name={referrer.name} label={referrer.placeholder} required>
              <Input {...referrer} />
            </AntForm.Item>

            <AntForm.Item name={referrer.name} extra={agreementContent}>
              <Styled.FormSubmitButton block type="primary" htmlType="submit">
                {submitBtnTitle}
              </Styled.FormSubmitButton>
            </AntForm.Item>
          </AntForm>
        </Formik>
      </Styled.Form>
    </Styled.FormContainer>
  );
};

export default Form;
