import * as R from 'ramda';
import React, { useState } from 'react';
import { Button, Col, Row, Result } from 'antd';
import { Checkbox, Form } from 'formik-antd';
import { Formik } from 'formik';
import { Link } from '@tidb-community/ui';
import { useTranslation } from 'next-i18next';

import { form as formUtils } from '~/utils';
import { getCommonFields, getSchema, getInitialValues } from './commonForm.fields';

const FormComponent = ({ children, submitApi, submitApiFormatter, formFields, formLocalePath }) => {
  const { t } = useTranslation('page-contact-us', 'common');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const lang = {
    ...t(formLocalePath, { returnObjects: true }),
    ...t('common:form', { returnObjects: true }),
  };
  const { agreement: agreementLang } = lang;

  const fields = {
    ...getCommonFields({ lang }),
    ...formFields,
  };
  const validationSchema = getSchema(fields);
  const initialValues = getInitialValues(fields);
  const { agreement } = fields;

  const onSubmit = formUtils.wrapFormikSubmitFunction(({ agreement, ...values }) => {
    setIsSubmitting(true);

    return submitApi(submitApiFormatter ? submitApiFormatter(values) : values)
      .then(() => {
        setIsSubmitted(true);
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

  if (isSubmitted) {
    const resultProps = {
      status: 'success',
      subTitle: lang.submitSuccessful,
      extra: [
        <Button
          type="primary"
          key="close"
          onClick={() => {
            window.open(window.location, '_self').close();
          }}
        >
          {lang.closePage}
        </Button>,
      ],
    };
    return <Result {...resultProps} />;
  }

  return (
    <Formik {...formikProps}>
      {({ errors }) => (
        <Form layout="vertical">
          <Row gutter={[32, 16]}>
            {children}

            <Col span={24}>
              <Form.Item name={agreement.name}>
                <Checkbox {...agreement}>
                  {agreementLang.text}
                  <Link href={agreementLang.privacy.link}>{agreementLang.privacy.title}</Link>
                </Checkbox>
              </Form.Item>
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
