import * as R from 'ramda';
import React, { useState } from 'react';
import moment from 'moment';
import useSWR from 'swr';
import { Button, Col, Row, Skeleton, message } from 'antd';
import { Form, FormItem, Input, Select } from 'formik-antd';
import { Formik } from 'formik';
import { RemoteSelect } from '@tidb-community/ui';
import { api, getFormData } from '@tidb-community/datasource';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

// import * as Styled from './form.styled';
import { getFields, getSchema } from './form.fields';
import { form as formUtils } from '~/utils';

const formData = getFormData();
const { organizationTypes, organizationSizes } = formData.org.enums;
const { Option } = Select;
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
  const { teamName, companyName, introduction, industryType, orgSize } = fields;

  console.log('data!!', data);

  const initialValues = {
    [teamName.name]: data.name ?? '',
    [companyName.name]: data.company_name,
    [introduction.name]: data.introduction ?? '',
    [industryType.name]: data.industry_type_code,
    [orgSize.name]: data.member_range_code,
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
      {({ values, errors }) => {
        const selectedCompanyNameValue = values[companyName.name];

        const selectedCompanyNameOption = {
          label: selectedCompanyNameValue,
          value: selectedCompanyNameValue,
        };

        return (
          <Form layout="vertical">
            <Row gutter={32}>
              <Col xs={24} md={12}>
                <FormItem label={lang.teamName} name={teamName.name}>
                  <Input {...teamName} />
                </FormItem>

                <FormItem label={lang.introduction} name={introduction.name}>
                  <Input {...introduction} />
                </FormItem>

                <FormItem label={lang.orgSize} name={orgSize.name}>
                  <Select {...orgSize}>
                    {organizationSizes.map(({ value, label }) => (
                      <Option key={value} value={value}>
                        {label}
                      </Option>
                    ))}
                  </Select>
                </FormItem>
              </Col>

              <Col xs={24} md={12}>
                <FormItem label={lang.companyName} name={companyName.name}>
                  <RemoteSelect
                    {...companyName}
                    selectedOption={selectedCompanyNameOption}
                    value={selectedCompanyNameValue}
                    Select={Select}
                  />
                </FormItem>

                <FormItem label={lang.industryType} name={lang.industryType}>
                  <Select {...industryType}>
                    {organizationTypes.map(({ value, label }) => (
                      <Option key={value} value={value}>
                        {label}
                      </Option>
                    ))}
                  </Select>
                </FormItem>
              </Col>
            </Row>

            <Button type="primary" htmlType="submit" disabled={!R.isEmpty(errors)} loading={isSubmitting}>
              {lang.submitBtn}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormComponent;
