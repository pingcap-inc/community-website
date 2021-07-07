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
  const { data: infoResp, error, mutate: mutateInfo } = useSWR(isReady && ['orgs.org.info', query]);
  const { t } = useTranslation('page-orgs');

  const { slug } = query;
  const lang = t('settings', { returnObjects: true });

  const isLoading = !error && !infoResp;
  if (isLoading) return <Skeleton />;

  const { data } = infoResp;
  const isAdmin = commonUtils.isAdmin(meData);
  const fields = getFields({ lang: lang.form, t, isAdmin });
  const schema = getSchema(fields);
  const { teamName, companyName, introduction, industryType, orgSize, orgLocation } = fields;

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
      .updateInfo({ slug, data: values })
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

  const uploadProps = {
    infoResp,
    isAdmin,
    lang,
    mutateInfo,
    slug,
  };

  return (
    <Formik {...formikProps}>
      {({ errors }) => (
        <Form layout="vertical">
          <Row gutter={32}>
            <Col xs={24} md={12}>
              <Styled.Row>
                <Upload {...uploadProps} />
                <FormItem label={lang.teamName} name={teamName.name}>
                  <Input {...teamName} />
                </FormItem>
              </Styled.Row>

              <FormItem label={lang.introduction} name={introduction.name}>
                <Input {...introduction} />
              </FormItem>

              <FormItem label={lang.orgSize} name={orgSize.name}>
                <Select {...orgSize} />
              </FormItem>
            </Col>

            <Col xs={24} md={12}>
              <FormItem label={lang.companyName} name={companyName.name}>
                <RemoteSelect {...companyName} />
              </FormItem>

              <FormItem label={lang.industryType} name={industryType.name}>
                <Select {...industryType} />
              </FormItem>

              <FormItem label={lang.orgLocation} name={orgLocation.name}>
                <Cascader {...orgLocation} />
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
