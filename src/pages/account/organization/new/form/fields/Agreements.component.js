import React, { useContext } from 'react';

import { Checkbox, Form as AntForm } from 'formik-antd';
import { Link } from '@tidb-community/ui';
import data from '../form.data';
import { NavContext } from '~/context';

const { sla, privacy, prefixText, ...agreementsProps } = data.form.agreements;

const Agreements = () => {
  const { navData } = useContext(NavContext);
  return (
    <AntForm.Item name={agreementsProps.name} valuePropName="checked">
      <Checkbox {...agreementsProps}>
        {prefixText}
        <Link href={navData.resources.orgVerificationAgreementsUrl}>{sla.title}</Link>、
        <Link href={navData.resources.orgPrivacyAgreementsUrl}>{privacy.title}</Link>
      </Checkbox>
    </AntForm.Item>
  );
};

export default Agreements;
