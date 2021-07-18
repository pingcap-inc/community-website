import * as R from 'ramda';
import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Form, FormItem, Input, Select, Cascader } from 'formik-antd';
import { Formik } from 'formik';

import { getFields, getSchema } from './form.fields';

const FormComponent = () => {
  const { t } = useTranslation('page-contact-us', 'common');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fields = getFields({ lang, t, isAdmin });
  const schema = getSchema(fields);

  const onSubmit = formUtils.wrapFormikSubmitFunction((values) => {
    setIsSubmitting(true);

    return api.orgs.org
      .updateInfo({ slug, data: { ...values, company_base_code: R.last(values.company_base_code) } })
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

  return <Formik {...formikProps}></Formik>;
};

export default FormComponent;
