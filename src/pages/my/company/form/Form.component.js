import * as R from 'ramda';
import React, { useState } from 'react';
import useSWR from 'swr';
import { Button, Col, Row, Skeleton, message } from 'antd';
import { Form, FormItem, Input, Select } from 'formik-antd';
import { Formik } from 'formik';
import { api, getFormData } from '@tidb-community/datasource';

import { fields, schema } from './form.fields';
import { form as formUtils } from '~/utils';

const formData = getFormData();
const { personalPositions } = formData.org.enums;
const { Option } = Select;

const FormComponent = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data: profileResp, error } = useSWR('profile.fetch');
  const isLoading = !error && !profileResp;

  if (isLoading) return <Skeleton />;

  const { data } = profileResp;
  const { companyName, position } = fields;

  const initialValues = {
    [companyName.name]: data.company_name,
    [position.name]: data.job_title,
  };

  const onSubmit = formUtils.wrapFormikSubmitFunction((values) => {
    setIsSubmitting(true);
    return api.profile
      .update({
        ...values,
      })
      .then(() => {
        message.success('公司信息更新成功');
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

  return (
    <Formik {...formikProps}>
      {({ errors }) => (
        <Form layout="vertical">
          <Row gutter={32}>
            <Col xs={24} md={12}>
              <FormItem label="公司名称" name={companyName.name}>
                <Input {...companyName} />
              </FormItem>

              <FormItem label="职位" name={position.name}>
                <Select {...position}>
                  {personalPositions.map(({ value, label }) => (
                    <Option key={value} value={value}>
                      {label}
                    </Option>
                  ))}
                </Select>
              </FormItem>

              <Button type="primary" htmlType="submit" disabled={!R.isEmpty(errors)} loading={isSubmitting}>
                更新信息
              </Button>
            </Col>

            <Col xs={24} md={12} />
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
