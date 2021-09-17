import React from 'react';
import { Form as AntForm, Input, Select, Checkbox } from 'formik-antd';
import { Row, Col, Skeleton } from 'antd';
import { Formik } from 'formik';

import * as Styled from './form.styled';
import data from './form.data';
import useSWR from 'swr';

const { form, submitBtnTitle, agreementContent, formSchema } = data;
const {
  realName,
  phone,
  email,
  companyName,
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

const Form = ({ onSubmit, isSubmitting }) => {
  const { data: settingsResp, error: settingsError } = useSWR('account.settings');
  const { data: profileResp, error: profileError } = useSWR('profile.fetch');

  const isLoading = !profileResp || !settingsResp || settingsError || profileError;
  if (isLoading) return <Skeleton active />;

  const initialValues = {
    [phone.name]: settingsResp.data.phone,
    [email.name]: settingsResp.data.email,
    [companyName.name]: profileResp.data.companyName,
    [jobTitle.name]: profileResp.data.jobTitle,
  };

  return (
    <Styled.FormContainer>
      <Styled.FormTitle>申请信息</Styled.FormTitle>
      <Styled.Form>
        <Formik initialValues={initialValues} validationSchema={formSchema} onSubmit={onSubmit}>
          <AntForm layout="vertical">
            <AntForm.Item name={realName.name} label={realName.placeholder} required>
              <Input {...realName} />
            </AntForm.Item>
            <AntForm.Item name={phone.name} label={phone.placeholder} required>
              <Input {...phone} disabled={!!settingsResp.data.phone} />
            </AntForm.Item>
            <AntForm.Item name={email.name} label={email.placeholder} required>
              <Input {...email} disabled={!!settingsResp.data.email} />
            </AntForm.Item>
            <AntForm.Item name={companyName.name} label={companyName.placeholder} required>
              <Input {...companyName} disabled={!!profileResp.data.companyName} />
            </AntForm.Item>
            <AntForm.Item name={jobTitle.name} label={jobTitle.placeholder} required>
              <Select {...jobTitle} disabled={!!profileResp.data.jobTitle} />
            </AntForm.Item>
            <AntForm.Item name={stageOfCompanyUseOfTidb.name} label={stageOfCompanyUseOfTidb.placeholder} required>
              <Select {...stageOfCompanyUseOfTidb} />
            </AntForm.Item>
            <AntForm.Item name={reasonForApplication.name} label={reasonForApplication.placeholder} required>
              <Input {...reasonForApplication} />
            </AntForm.Item>
            <AntForm.Item name={preferredWayOfSharing.name} label={preferredWayOfSharing.placeholder} required>
              <Checkbox.Group style={{ width: '100%' }} {...preferredWayOfSharing}>
                <Row>
                  {preferredWayOfSharing.items.map((value) => (
                    <Col key={value.value} span={24}>
                      <Checkbox value={value.value}>{value.label}</Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            </AntForm.Item>
            <AntForm.Item name={rolesWantToPlay.name} label={rolesWantToPlay.placeholder} required>
              <Checkbox.Group style={{ width: '100%' }} {...rolesWantToPlay}>
                <Row>
                  {rolesWantToPlay.items.map((value) => (
                    <Col key={value.value} span={24}>
                      <Checkbox value={value.value}>{value.label}</Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            </AntForm.Item>
            <AntForm.Item name={wechatId.name} label={wechatId.placeholder} required>
              <Input {...wechatId} />
            </AntForm.Item>
            <AntForm.Item name={bio.name} label={bio.placeholder}>
              <Input.TextArea rows={3} {...bio} />
            </AntForm.Item>
            <AntForm.Item name={channel.name} label={channel.placeholder}>
              <Input {...channel} />
            </AntForm.Item>
            <AntForm.Item name={referrer.name} label={referrer.placeholder}>
              <Input {...referrer} />
            </AntForm.Item>

            <AntForm.Item name={referrer.name} extra={agreementContent}>
              <Styled.FormSubmitButton block type="primary" htmlType="submit" loading={isSubmitting}>
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
