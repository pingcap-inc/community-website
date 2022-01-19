import { ApiRequestFunction } from '../../index';

import { sendCode } from './sendCode';
import { uploadIncumbencyCert } from './uploadIncumbencyCert';

type EnrollFormContentBase = {
  name: string;
  company: string;
  industry_type: string;
  member_range: string;
  job_title: string;
  company_base: string;
  contact_phone: string;
  audit_type: number;
};

type EnrollFormContentAuditByEmailCode = EnrollFormContentBase & {
  audit_type: 0;
  email: string;
  email_code: string;
};

type EnrollFormContentAuditByIncumbencyCert = EnrollFormContentBase & {
  audit_type: 1;
  incumbency_cert: number;
};

type EnrollFormContent = EnrollFormContentAuditByEmailCode | EnrollFormContentAuditByIncumbencyCert;

declare const enroll: ApiRequestFunction<EnrollFormContent, void> & {
  sendCode: typeof sendCode;
  uploadIncumbencyCert: typeof uploadIncumbencyCert;
};

export default enroll;
