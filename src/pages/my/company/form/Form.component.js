import * as R from 'ramda';
import React, { useState } from 'react';
import useSWR from 'swr';
import { Button, Col, Row, Skeleton, message } from 'antd';
import { Form, FormItem, Select } from 'formik-antd';
import { Formik } from 'formik';
import { api } from '@tidb-community/datasource';

import * as Styled from './form.styled';
import { fields, schema } from './form.fields';
import { form as formUtils } from '~/utils';
import { fetchOrganizationOptions } from '~/utils/form.utils';
import { RemoteSelect } from '@tidb-community/ui';

const FormComponent = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data: profileResp, error } = useSWR('profile.fetch');
  const isLoading = !error && !profileResp;

  if (isLoading) return <Skeleton active />;

  const { data } = profileResp;
  const { companyName, position } = fields;

  const initialValues = {
    [companyName.name]: data.company_name,
    [position.name]: data.job_title,
  };

  const fetchOpt = {
    fetchOptions: fetchOrganizationOptions,
    Select,
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

  const { company_name_editable: isEditable } = data;

  return (
    <Formik {...formikProps}>
      {({ errors }) => (
        <Form layout="vertical">
          <Row gutter={32}>
            <Col xs={24} md={12}>
              <FormItem label={<Styled.Label>公司名称</Styled.Label>} name={companyName.name}>
                <RemoteSelect {...companyName} {...fetchOpt} disabled={!isEditable} />
              </FormItem>

              <FormItem label="职位" name={position.name}>
                <Select {...position} />
              </FormItem>

              <Button
                type="primary"
                htmlType="submit"
                size="small"
                disabled={!R.isEmpty(errors)}
                loading={isSubmitting}
              >
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
