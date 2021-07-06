import * as R from 'ramda';
import React, { useContext, useState } from 'react';
import useSWR from 'swr';
import { Button, Col, Row, Skeleton, message } from 'antd';
import { Form, FormItem, Input, Select, Cascader } from 'formik-antd';
import { Formik } from 'formik';
import { RemoteSelect } from '@tidb-community/ui';
import { api } from '@tidb-community/datasource';
import { utils } from '@tidb-community/common';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import * as Styled from './form.styled';
import Upload from './Upload.component';
import { MeContext } from '~/context';
import { common as commonUtils, form as formUtils } from '~/utils';
import { getFields, getSchema } from './form.fields';

const FormComponent = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { meData } = useContext(MeContext);
  const { isReady, query } = router;
  const { data: infoResp, error } = useSWR(isReady && ['orgs.org.info', query]);
  const { t } = useTranslation('page-orgs');

  const lang = t('settings', { returnObjects: true });
  const isAdmin = commonUtils.isAdmin(meData);
  const disabled = !isAdmin;

  const isLoading = !error && !infoResp;
  if (isLoading) return <Skeleton />;

  const { data } = infoResp;
  const fields = getFields({ lang: lang.validations, t });
  const schema = getSchema(fields);
  const { teamName, companyName, introduction, industryType, orgSize, orgLocation } = fields;

  console.log('data!!', data);
  const initialValues = {
    [teamName.name]: data.name ?? '',
    [companyName.name]: data.company_name,
    [introduction.name]: data.introduction ?? '',
    [industryType.name]: data.industry_type_code,
    [orgSize.name]: data.member_range_code,
    [orgLocation.name]: utils.form.getCascaderDefaultValue(data.company_base_code, orgLocation.options),
  };

  const onSubmit = formUtils.wrapFormikSubmitFunction((values) => {
    setIsSubmitting(true);

    return api.orgs.org
      .updateInfo({ slug: query.slug, data: values })
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
    validationSchema: schema,
  };

  return (
    <Formik {...formikProps}>
      {({ errors }) => (
        <Form layout="vertical">
          <Row gutter={32}>
            <Col xs={24} md={12}>
              <Styled.Row>
                <Upload {...R.pick(['name', 'logo'], data)} />
                <FormItem label={lang.teamName} name={teamName.name}>
                  <Input {...teamName} disabled={disabled} />
                </FormItem>
              </Styled.Row>

              <FormItem label={lang.introduction} name={introduction.name}>
                <Input {...introduction} disabled={disabled} />
              </FormItem>

              <FormItem label={lang.orgSize} name={orgSize.name}>
                <Select {...orgSize} disabled={disabled} />
              </FormItem>
            </Col>

            <Col xs={24} md={12}>
              <FormItem label={lang.companyName} name={companyName.name}>
                <RemoteSelect {...companyName} disabled={disabled} />
              </FormItem>

              <FormItem label={lang.industryType} name={industryType.name}>
                <Select {...industryType} disabled={disabled} />
              </FormItem>

              <FormItem label={lang.orgLocation} name={orgLocation.name}>
                <Cascader {...orgLocation} disabled={disabled} />
              </FormItem>
            </Col>
          </Row>

          {isAdmin && (
            <Button type="primary" htmlType="submit" disabled={!R.isEmpty(errors)} loading={isSubmitting}>
              {lang.submitBtn}
            </Button>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
