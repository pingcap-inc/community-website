import React from 'react';
import useSWR from 'swr';
import { Col } from 'antd';
import { Input, Select } from 'formik-antd';
import { api } from '@tidb-community/datasource';
import { useTranslation } from 'next-i18next';

import CommonForm from '~/pages/contact-us/commonForm';
import { RequiredFormItem } from '~/components';
import { getFields } from './form.fields';

const { TextArea } = Input;

const FormComponent = () => {
  const { t } = useTranslation('page-contact-us', 'common');
  const { data } = useSWR(['tidbReleases']);

  const formLocalePath = 'incident.form';
  const lang = {
    ...t(formLocalePath, { returnObjects: true }),
    ...t('common:form', { returnObjects: true }),
  };

  const formFields = getFields({ lang, t, tidbReleases: data?.data });
  const { type, priority, tidbVersion, summary, background, appearance, problem, affect } = formFields;

  const commonFormProps = {
    formFields,
    formLocalePath,
    submitApi: api.contactUs.reportIncident,
  };

  return (
    <CommonForm {...commonFormProps}>
      <Col xs={24} sm={8}>
        <RequiredFormItem label={lang.type.label} name={type.name}>
          <Select {...type} />
        </RequiredFormItem>
      </Col>

      <Col xs={24} sm={8}>
        <RequiredFormItem label={lang.priority.label} name={priority.name}>
          <Select {...priority} />
        </RequiredFormItem>
      </Col>

      <Col xs={24} sm={8}>
        <RequiredFormItem label={lang.tidbVersion} name={tidbVersion.name}>
          <Select {...tidbVersion} />
        </RequiredFormItem>
      </Col>

      <Col span={24}>
        <RequiredFormItem label={lang.summary.label} name={summary.name}>
          <TextArea {...summary} />
        </RequiredFormItem>
      </Col>

      <Col span={24}>
        <RequiredFormItem label={lang.background.label} name={background.name}>
          <TextArea {...background} />
        </RequiredFormItem>
      </Col>

      <Col span={24}>
        <RequiredFormItem label={lang.appearance.label} name={appearance.name}>
          <TextArea {...appearance} />
        </RequiredFormItem>
      </Col>

      <Col span={24}>
        <RequiredFormItem label={lang.problem.label} name={problem.name}>
          <TextArea {...problem} />
        </RequiredFormItem>
      </Col>

      <Col span={24}>
        <RequiredFormItem label={lang.affect.label} name={affect.name}>
          <TextArea {...affect} />
        </RequiredFormItem>
      </Col>
    </CommonForm>
  );
};

export default FormComponent;
