import React from 'react';
import useSWR from 'swr';
import { Col } from 'antd';
import { Checkbox, DatePicker, FormItem, Input, InputNumber, Select } from 'formik-antd';
import { api } from '@tidb-community/datasource';
import { useTranslation } from 'next-i18next';

import CommonForm from '~/pages/contact-us/commonForm';
import { RequiredFormItem } from '~/components';
import { getFields } from './form.fields';

const { TextArea } = Input;

const FormComponent = () => {
  const { t } = useTranslation('page-contact-us', 'common');
  const { data } = useSWR(['tidbReleases']);

  const formLocalePath = 'consultancy.form';
  const lang = {
    ...t(formLocalePath, { returnObjects: true }),
    ...t('common:form', { returnObjects: true }),
  };

  const formFields = getFields({ lang, t, tidbReleases: data?.data });
  const {
    tidbNodeNum,
    tikvNodeNum,
    tiflashNodeNum,
    occupationRateOfTidb,
    tidbVersion,
    keyScene,
    currentArchitecture,
    painPoints,
    challenge,
    expectedBenefits,
    pocDate,
    estimate,
    tidbUsage,
  } = formFields;

  const commonFormProps = {
    formFields,
    formLocalePath,
    submitApi: api.contactUs.requestCooperation,
  };

  return (
    <CommonForm {...commonFormProps}>
      <Col xs={24} sm={8}>
        <RequiredFormItem label={lang.tidbNodeNum.label} name={tidbNodeNum.name}>
          <InputNumber {...tidbNodeNum} />
        </RequiredFormItem>
      </Col>

      <Col xs={24} sm={8}>
        <RequiredFormItem label={lang.tikvNodeNum.label} name={tikvNodeNum.name}>
          <InputNumber {...tikvNodeNum} />
        </RequiredFormItem>
      </Col>

      <Col xs={24} sm={8}>
        <RequiredFormItem label={lang.tiflashNodeNum.label} name={tiflashNodeNum.name}>
          <InputNumber {...tiflashNodeNum} />
        </RequiredFormItem>
      </Col>

      <Col xs={24} sm={12}>
        <RequiredFormItem label={lang.occupationRateOfTidb.label} name={occupationRateOfTidb.name}>
          <InputNumber {...occupationRateOfTidb} />
        </RequiredFormItem>
      </Col>

      <Col xs={24} sm={12}>
        <RequiredFormItem label={lang.tidbVersion.label} name={tidbVersion.name}>
          <Select {...tidbVersion} />
        </RequiredFormItem>
      </Col>

      <Col span={24}>
        <FormItem label={lang.keyScene.label} name={keyScene.name}>
          <TextArea {...keyScene} />
        </FormItem>
      </Col>

      <Col span={24}>
        <RequiredFormItem label={lang.currentArchitecture.label} name={currentArchitecture.name}>
          <TextArea {...currentArchitecture} />
        </RequiredFormItem>
      </Col>

      <Col span={24}>
        <RequiredFormItem label={lang.painPoints.label} name={painPoints.name}>
          <TextArea {...painPoints} />
        </RequiredFormItem>
      </Col>

      <Col span={24}>
        <RequiredFormItem label={lang.challenge.label} name={challenge.name}>
          <TextArea {...challenge} />
        </RequiredFormItem>
      </Col>

      <Col span={24}>
        <RequiredFormItem label={lang.expectedBenefits.label} name={expectedBenefits.name}>
          <TextArea {...expectedBenefits} />
        </RequiredFormItem>
      </Col>

      <Col xs={24} sm={12}>
        <RequiredFormItem label={lang.expectedBenefits.label} name={pocDate.name}>
          <DatePicker {...pocDate} />
        </RequiredFormItem>
      </Col>

      <Col xs={24} sm={12}>
        <RequiredFormItem label={lang.estimate.label} name={estimate.name}>
          <InputNumber {...estimate} />
        </RequiredFormItem>
      </Col>

      <Col span={24}>
        <RequiredFormItem label={lang.tidbUsage.label} name={tidbUsage.name}>
          <Checkbox.Group {...tidbUsage} />
        </RequiredFormItem>
      </Col>
    </CommonForm>
  );
};

export default FormComponent;
