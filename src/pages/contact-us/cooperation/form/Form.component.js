import React from 'react';
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

  const formLocalePath = 'cooperation.form';
  const lang = {
    ...t(formLocalePath, { returnObjects: true }),
    ...t('common:form', { returnObjects: true }),
  };

  const formFields = getFields({ lang, t });
  const { type, detail } = formFields;

  const commonFormProps = {
    formFields,
    formLocalePath,
    submitApi: api.contactUs.requestCooperation,
  };

  return (
    <CommonForm {...commonFormProps}>
      <Col span={24}>
        <RequiredFormItem label={lang.type.label} name={type.name}>
          <Select {...type} />
        </RequiredFormItem>
      </Col>

      <Col span={24}>
        <RequiredFormItem label={lang.detail.label} name={detail.name}>
          <TextArea {...detail} />
        </RequiredFormItem>
      </Col>
    </CommonForm>
  );
};

export default FormComponent;
