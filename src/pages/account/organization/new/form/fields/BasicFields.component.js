import { Form as AntForm, Input, Select, Cascader } from 'antd';
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
        <Select placeholder={organizationType.placeholder} options={organizationType.enums} />
      </AntForm.Item>
      <AntForm.Item name={organizationSize.name}>
        <Select placeholder={organizationSize.placeholder} options={organizationSize.enums} />
      </AntForm.Item>
      <AntForm.Item name={organizationLocation.name}>
        <Cascader placeholder={organizationLocation.placeholder} options={organizationLocation.provinces} />
      </AntForm.Item>
      <AntForm.Item name={personalPosition.name}>
        <Select placeholder={personalPosition.placeholder} options={personalPosition.enums} />
      </AntForm.Item>
      <AntForm.Item name={personalContact.name}>
        <Input placeholder={personalContact.placeholder} />
      </AntForm.Item>
    </>
  );
};

export default BasicFields;
