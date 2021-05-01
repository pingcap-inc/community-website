import React from 'react';

import { Checkbox, Form as AntForm } from 'formik-antd';
import { Link } from '@tidb-community/ui';
import data from '../form.data';

const { sla, privacy, prefixText, ...agreementsProps } = data.form.agreements;

const Agreements = () => {
  return (
    <AntForm.Item name={agreementsProps.name} valuePropName="checked">
      <Checkbox {...agreementsProps}>
        {prefixText}
        <Link href={sla.link}>{sla.title}</Link>
        <Link href={privacy.link}>{privacy.title}</Link>
      </Checkbox>
    </AntForm.Item>
  );
};

export default Agreements;
