import client from '../../client';
import { sendCode } from './sendCode';
import { uploadIncumbencyCert } from './uploadIncumbencyCert';

const enroll = ({
  name,
  company,
  industry_type,
  member_range,
  job_title,
  company_base,
  contact_phone,
  audit_type,
  email,
  email_code,
  incumbency_cert,
}) => {
  const formContent = {
    name,
    company,
    industry_type,
    member_range,
    job_title,
    company_base,
    contact_phone,
    audit_type,
  };

  switch (audit_type) {
    case 0:
      formContent.email = email;
      formContent.email_code = email_code;
      break;
    case 1:
      formContent.incumbency_cert = incumbency_cert;
      break;
    default:
      return Promise.reject('unsupported audit_type');
  }

  return client.post('/api/orgs/enroll', formContent, {
    isDispatchApiErrorDisabled: true,
  });
};

enroll.sendCode = sendCode;

enroll.uploadIncumbencyCert = uploadIncumbencyCert;

export default enroll;
