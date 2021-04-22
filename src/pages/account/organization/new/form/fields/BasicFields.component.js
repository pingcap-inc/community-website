import { Form as AntForm, Input } from 'antd';
import data from '../form.data';

const {
  nickname,
  organization,
  organizationType,
  organizationSize,
  organizationLocation,
  personalPosition,
  personalContact,
} = data.form;

const BasicFields = () => {
  return (
    <>
      <AntForm.Item name={nickname.name}>
        <Input placeholder={nickname.placeholder} />
      </AntForm.Item>
      <AntForm.Item name={organization.name}>
        <Input placeholder={organization.placeholder} />
      </AntForm.Item>
      <AntForm.Item name={organizationType.name}>
        <Input placeholder={organizationType.placeholder} />
      </AntForm.Item>
      <AntForm.Item name={organizationSize.name}>
        <Input placeholder={organizationSize.placeholder} />
      </AntForm.Item>
      <AntForm.Item name={organizationLocation.name}>
        <Input placeholder={organizationLocation.placeholder} />
      </AntForm.Item>
      <AntForm.Item name={personalPosition.name}>
        <Input placeholder={personalPosition.placeholder} />
      </AntForm.Item>
      <AntForm.Item name={personalContact.name}>
        <Input placeholder={personalContact.placeholder} />
      </AntForm.Item>
    </>
  );
};

export default BasicFields;
