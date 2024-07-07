import client from '../client';

export const sendPhoneCode = ({ phone }: { phone: string }) =>
  client.post('/api/official/contact-us/sms-code', {
    phone,
  });

export const submitSupportForm = (data: {
  name: string;
  phone?: string;
  phone_code?: string;
  company: string;
  consult_detail: string;
}) => client.post('/api/community-contact-us', data);
