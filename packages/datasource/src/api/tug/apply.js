import client from '../client';

export const apply = ({
  name,
  phone,
  email,
  company,
  jobTitle,
  stageOfCompanyUseOfTidb,
  reasonForApplication,
  preferredWayOfSharing,
  rolesWantToPlay,
  wechatId,
  bio,
  channel,
  referrer,
}) => {
  const formContent = {
    name,
    phone,
    email,
    company,
    jobTitle,
    stageOfCompanyUseOfTidb,
    reasonForApplication,
    preferredWayOfSharing,
    rolesWantToPlay,
    wechatId,
    bio,
    channel,
    referrer,
  };

  return client.post('/api/tug/applications', formContent, {
    isDispatchApiError: () => false,
  });
};
