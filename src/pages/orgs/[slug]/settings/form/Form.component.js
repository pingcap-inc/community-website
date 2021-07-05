import * as R from 'ramda';
import React, { useState } from 'react';
import moment from 'moment';
import useSWR from 'swr';
import { Button, Col, Row, Skeleton, message } from 'antd';
import { Form, FormItem, Input, Select } from 'formik-antd';
import { Formik } from 'formik';
import { RemoteSelect } from '@tidb-community/ui';
import { api } from '@tidb-community/datasource';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

// import * as Styled from './form.styled';
import { getFields, getSchema } from './form.fields';
import { form as formUtils } from '~/utils';

const dateApiFormat = 'YYYY-MM-DD';

const FormComponent = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isReady, query } = router;
  const { data: infoResp, error } = useSWR(isReady && ['orgs.org.info', query]);
  const { t } = useTranslation('page-orgs');

  const lang = t('settings', { returnObjects: true });

  const isLoading = !error && !infoResp;
  if (isLoading) return <Skeleton />;

  const { data } = infoResp;
  const fields = getFields({ lang: lang.validations, t });
  const schema = getSchema(fields);
  const { teamName, companyName } = fields;

  const initialValues = {
    [teamName.name]: data.name ?? '',
    [companyName.name]: data.company_name,
  };

  const onSubmit = formUtils.wrapFormikSubmitFunction((values) => {
    setIsSubmitting(true);

    const { date_of_birth: dob } = values;

    return api.profile
      .update({
        ...values,
        date_of_birth: dob ? moment(dob).format(dateApiFormat) : null,
      })
      .then(() => {
        message.success('个人信息更新成功');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  });

  const formikProps = {
    initialValues,
    onSubmit,
    validationSchema: schema,
  };

  console.log('fields!!', fields, initialValues);

  return (
    <Formik {...formikProps}>
      {({ values, errors }) => (
        <Form layout="vertical">
          <Row gutter={32}>
            <Col xs={24} md={12}>
              <FormItem label={lang.teamName} name={teamName.name}>
                <Input {...teamName} />
              </FormItem>
            </Col>

            <Col xs={24} md={12}>
              <FormItem label={lang.companyName} name={companyName.name}>
                {values[companyName.name]}
                <RemoteSelect {...companyName} Select={Select} />
              </FormItem>
            </Col>
          </Row>

          <Button type="primary" htmlType="submit" disabled={!R.isEmpty(errors)} loading={isSubmitting}>
            {lang.submitBtn}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
