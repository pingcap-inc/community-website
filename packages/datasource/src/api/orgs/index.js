import { sendCode } from './enroll/sendCode';
import { uploadIncumbencyCert } from './enroll/uploadIncumbencyCert';

export * as org from './[slug]';
export { checkName } from './checkName';
export { searchCompany } from './searchCompany';

export const enroll = {
  sendCode,
  uploadIncumbencyCert,
};
