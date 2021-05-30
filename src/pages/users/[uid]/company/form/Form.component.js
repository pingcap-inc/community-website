import * as R from 'ramda';
import React from 'react';
import useSWR from 'swr';
import { Button, Col, Row, Skeleton } from 'antd';
import { Form, Input, Select } from 'formik-antd';
import { Formik } from 'formik';
import { getFormData } from '@tidb-community/datasource';

import { form, schema } from './form.data';

const formData = getFormData();
const { personalPositions } = formData.org.enums;
const { Item } = Form;
const { Option } = Select;

const FormComponent = () => {
  const { data: profileResp, error } = useSWR('profile');
  const isLoading = !error && !profileResp;

  if (isLoading) return <Skeleton />;

  const { data } = profileResp;
  const { companyName, position } = form;

  const initialValues = {
    [companyName.name]: data.company_name,
    [position.name]: data.job_title,
  };

  const onSubmit = (form) => {
    console.log(form);
  };

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
            <Col sm={24} md={12}>
              <Item label="公司名称" name={companyName.name}>
                <Input {...companyName} />
              </Item>

              <Item label="职位" name={position.name}>
                <Select {...position}>
                  {personalPositions.map(({ value, label }) => (
                    <Option key={value} value={value}>
                      {label}
                    </Option>
                  ))}
                </Select>
              </Item>

              <Button type="primary" htmlType="submit" disabled={!R.isEmpty(errors)}>
                更新信息
              </Button>
            </Col>

            <Col sm={24} md={12} />
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
