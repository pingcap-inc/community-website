import client from '../client';

export const apply = ({
  real_name,
  phone,
  email,
  company,
  job_title,
  stage_of_company_use_of_tidb,
  reason_for_application,
  preferred_way_of_sharing,
  roles_want_to_play,
  wechat_id,
  bio,
  channel,
  referrer,
}) => {
  const formContent = {
    real_name,
    phone,
    email,
    company,
    job_title,
    stage_of_company_use_of_tidb,
    reason_for_application,
    preferred_way_of_sharing,
    roles_want_to_play,
    wechat_id,
    bio,
    channel,
    referrer,
  };

  return client.post('/api/tug/applications', formContent);
};
