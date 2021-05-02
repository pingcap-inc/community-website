import { members } from './[slug]';
import { sendCode } from './enroll/sendCode';
import { uploadIncumbencyCert } from './enroll/uploadIncumbencyCert';

export { checkName } from './checkName';
export { searchCompany } from './searchCompany';

export const org = {
  members,
};

export const enroll = {
  sendCode,
  uploadIncumbencyCert,
};
