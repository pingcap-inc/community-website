import * as R from 'ramda';
import React, { useState } from 'react';
import { Form, FormItem, Select } from 'formik-antd';
import { Formik } from 'formik';
import { api } from '@tidb-community/datasource';
import { Button, Col, Row, message } from 'antd';
import { useTranslation } from 'next-i18next';

import { form as formUtils } from '~/utils';
import { getFields, getSchema, getInitialValues } from './form.fields';

const FormComponent = () => {
  const { t } = useTranslation('page-contact-us', 'common');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const lang = {
    ...t('incident.form', { returnObjects: true }),
    ...t('common:form', { returnObjects: true }),
  };

  const fields = getFields({ lang, t });
  const validationSchema = getSchema(fields);
  const initialValues = getInitialValues(fields);
  const { type } = fields;

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
            <Col xs={24} md={8}>
              <FormItem label={lang.type.label} name={type.name}>
                <Select {...type} />
              </FormItem>
            </Col>
            <Col xs={24} md={8}>
              <FormItem label={lang.type.label} name={type.name}>
                <Select {...type} />
              </FormItem>
            </Col>
            <Col xs={24} md={8}>
              <FormItem label={lang.type.label} name={type.name}>
                <Select {...type} />
              </FormItem>
            </Col>
          </Row>
          <Button type="primary" htmlType="submit" disabled={!R.isEmpty(errors)} loading={isSubmitting}>
            {lang.submit}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
