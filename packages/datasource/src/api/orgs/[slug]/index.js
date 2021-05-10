import client from '../../client';

export const members = ({ slug }) => {
  return client.get(`/api/orgs/${slug}/members`);
};

export const findUser = ({ slug, word }) => {
  return client.get(`/api/orgs/${slug}/find-user`, { params: { word } });
};

export const removeMember = ({ slug, userId }) => {
  return client.post(`/api/orgs/${slug}/remove-member`, { user_id: userId });
};

export const addMembers = ({ role, slug, userIds }) => {
  return client.post(`/api/orgs/${slug}/add-members`, { role, user_ids: userIds });
};

export const updateMemberRole = ({ role, slug, userId }) => {
  return client.put(`/api/orgs/${slug}/member-role`, { role, user_id: userId });
};
