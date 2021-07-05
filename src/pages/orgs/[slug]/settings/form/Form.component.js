import * as R from 'ramda';
import React, { useState } from 'react';
import moment from 'moment';
import useSWR from 'swr';
import { Button, Col, Row, Skeleton, message } from 'antd';
import { Form, FormItem, Input } from 'formik-antd';
import { Formik } from 'formik';
import { api } from '@tidb-community/datasource';
import { useTranslation } from 'next-i18next';

import * as Styled from './form.styled';
import { fields, schema } from './form.fields';
import { form as formUtils } from '~/utils';

const dateApiFormat = 'YYYY-MM-DD';

const FormComponent = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data: profileResp, error } = useSWR('profile.fetch');
  const { t } = useTranslation('page-orgs');

  const lang = t('settings', { returnObjects: true });
  console.log('lang', lang);

  const isLoading = !error && !profileResp;
  if (isLoading) return <Skeleton />;

  const { data } = profileResp;
  const { username, bio, name, gender, dateOfBirth, address } = fields;

  const bioMaxLength = 140;

  const initialValues = {
    [username.name]: data.username ?? '',
    [bio.name]: data.bio?.substr(0, bioMaxLength),
    [name.name]: data.name,
    [gender.name]: data.gender,
    [dateOfBirth.name]: data.date_of_birth && moment(data.date_of_birth, dateApiFormat),
    [address.name]: data.address,
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

  return (
    <Formik {...formikProps}>
      {({ errors }) => (
        <Form layout="vertical">
          <Row gutter={32}>
            <Col xs={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }}>
              <FormItem label={lang.teamName} name={username.name}>
                <Input {...username} />
              </FormItem>
            </Col>

            <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }}>
              <FormItem label="姓名" name={name.name}>
                <Input {...name} />
              </FormItem>
            </Col>
          </Row>

          <Button type="primary" htmlType="submit" disabled={!R.isEmpty(errors)} loading={isSubmitting}>
            更新信息
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
