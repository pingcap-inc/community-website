import client from '../../client';
import { sendCode } from './sendCode';
import { uploadIncumbencyCert } from './uploadIncumbencyCert';

const enroll = (formContent) => {
  return client.post('/api/orgs/enroll', formContent, {
    isDispatchApiErrorDisabled: true,
  });
};
enroll.sendCode = sendCode;
enroll.uploadIncumbencyCert = uploadIncumbencyCert;

export default enroll;
