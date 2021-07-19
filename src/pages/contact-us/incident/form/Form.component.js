import * as R from 'ramda';
import React, { useState } from 'react';
import useSWR from 'swr';
import { Button, Col, Row, message } from 'antd';
import { Form, Input, Select } from 'formik-antd';
import { Formik } from 'formik';
import { api } from '@tidb-community/datasource';
import { useTranslation } from 'next-i18next';

import { RequiredFormItem } from '~/components';
import { form as formUtils } from '~/utils';
import { getFields, getSchema, getInitialValues } from './form.fields';

const { TextArea } = Input;

const FormComponent = () => {
  const { t } = useTranslation('page-contact-us', 'common');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data } = useSWR(['tidbReleases']);

  const lang = {
    ...t('incident.form', { returnObjects: true }),
    ...t('common:form', { returnObjects: true }),
  };

  const fields = getFields({ lang, t, tidbReleases: data?.data });
  const validationSchema = getSchema(fields);
  const initialValues = getInitialValues(fields);
  const { type, priority, tidbVersion, summary, background, appearance, problem, affect } = fields;

  const onSubmit = formUtils.wrapFormikSubmitFunction((values) => {
    setIsSubmitting(true);

    return api.contactUs
      .reportIncident(values)
      .then(() => {
        message.success(lang.submitSuccessful);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  });

  const formikProps = {
    initialValues,
    onSubmit,
    validationSchema,
  };

  return (
    <Formik {...formikProps}>
      {({ errors }) => (
        <Form layout="vertical">
          <Row gutter={32}>
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

            <Col span={24}>
              <Button
                type="primary"
                htmlType="submit"
                size="small"
                disabled={!R.isEmpty(errors)}
                loading={isSubmitting}
              >
                {lang.submit}
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
