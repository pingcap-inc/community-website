import React from 'react';
import { Form as AntForm, Input, Select, Checkbox, AutoComplete } from 'formik-antd';
import { Row, Col, Skeleton } from 'antd';
import { Formik } from 'formik';
import useSWR from 'swr';

import * as R from 'ramda';
import * as Styled from './form.styled';
import data from './form.data';

import { fetchOrganizationOptions } from '~/pages/account/organization/new/form/form.data';
import { RemoteSelect } from '@tidb-community/ui';

const { form, submitBtnTitle, formSchema } = data;
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
  agreement,
} = form;

const Form = ({ onSubmit, isSubmitting }) => {
  const { data: settingsResp, error: settingsError } = useSWR('account.settings');
  const { data: profileResp, error: profileError } = useSWR('profile.fetch');

  const isLoading = !profileResp || !settingsResp || settingsError || profileError;
  if (isLoading) return <Skeleton active />;

  const initialValues = {
    [realName.name]: '',
    [phone.name]: settingsResp.data.phone ?? '',
    [email.name]: settingsResp.data.email ?? '',
    [companyName.name]: profileResp.data.company_name ?? '',
    [jobTitle.name]: profileResp.data.job_title ?? '',
    [stageOfCompanyUseOfTidb.name]: '',
    [reasonForApplication.name]: '',
    [preferredWayOfSharing.name]: '',
    [rolesWantToPlay.name]: '',
    [wechatId.name]: '',
    [agreement.name]: '',
  };

  const fetchOpt = {
    fetchOptions: fetchOrganizationOptions,
    Select,
  };

  return (
    <Styled.FormContainer>
      <Styled.FormTitle>申请信息</Styled.FormTitle>
      <Styled.Form>
        <Formik initialValues={initialValues} validationSchema={formSchema} onSubmit={onSubmit}>
          {({ errors }) => (
            <AntForm layout="vertical">
              <AntForm.Item name={realName.name} label={realName.placeholder} required>
                <Input {...realName} />
              </AntForm.Item>
              <AntForm.Item name={phone.name} label={phone.placeholder} required>
                <Input {...phone} disabled={!!settingsResp.data.phone} />
              </AntForm.Item>
              <AntForm.Item name={email.name} label={email.placeholder} required>
                <Input {...email} disabled={!!settingsResp.data.email_verified} />
              </AntForm.Item>
              <AntForm.Item name={companyName.name} label={companyName.placeholder} required>
                <RemoteSelect {...companyName} {...fetchOpt} disabled={!profileResp.data.company_name_editable} />
              </AntForm.Item>
              <AntForm.Item name={jobTitle.name} label={jobTitle.placeholder} required>
                <Select {...jobTitle} />
              </AntForm.Item>
              <AntForm.Item name={stageOfCompanyUseOfTidb.name} label={stageOfCompanyUseOfTidb.placeholder} required>
                <AutoComplete {...stageOfCompanyUseOfTidb} />
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
                <AutoComplete {...channel} />
              </AntForm.Item>
              <AntForm.Item name={referrer.name} label={referrer.placeholder}>
                <Input {...referrer} />
              </AntForm.Item>

              <AntForm.Item name="submit">
                <Styled.FormSubmitButton
                  block
                  type="primary"
                  htmlType="submit"
                  loading={isSubmitting}
                  disabled={!R.isEmpty(errors)}
                >
                  {submitBtnTitle}
                </Styled.FormSubmitButton>
              </AntForm.Item>
              <AntForm.Item name={agreement.name}>
                <Checkbox {...agreement}>{agreement.content}</Checkbox>
              </AntForm.Item>
            </AntForm>
          )}
        </Formik>
      </Styled.Form>
    </Styled.FormContainer>
  );
};

export default Form;
