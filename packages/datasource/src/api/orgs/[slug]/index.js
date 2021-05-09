import client from '../../client';

export const members = ({ slug }) => {
  return client.get(`/api/orgs/${slug}/members`);
};

export const findUser = ({ slug, word }) => {
  return client.get(`/api/orgs/${slug}/find-user`, { params: { word } });
};

export const removeMember = ({ slug, userId }) => {
  return client.post(`/api/orgs/${slug}/remove-member`, { userId });
};

export const addMembers = ({ slug, userIds, role }) => {
  return client.post(`/api/orgs/${slug}/add-members`, { userIds, role });
};

export const updateMemberRole = ({ role, slug, userId }) => {
  return client.post(`/api/orgs/${slug}/update-member-role`, { role, userId });
};
