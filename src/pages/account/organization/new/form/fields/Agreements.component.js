import React from 'react';
import { Checkbox, Form as AntForm } from 'formik-antd';
import { Link } from '@tidb-community/ui';

import data from '../form.data';

const { sla, privacy, prefixText, ...agreementsProps } = data.form.agreements;
const orgVerificationAgreementsUrl = 'https://tidb.io/docs/org-verification-agreement';
const orgPrivacyAgreementsUrl = 'https://pingcap.com/zh/privacy-policy/';

const Agreements = () => {
  return (
    <AntForm.Item name={agreementsProps.name} valuePropName="checked">
      <Checkbox {...agreementsProps}>
        {prefixText}
        <Link href={orgVerificationAgreementsUrl}>{sla.title}</Link>、
        <Link href={orgPrivacyAgreementsUrl}>{privacy.title}</Link>
      </Checkbox>
    </AntForm.Item>
  );
};

export default Agreements;
