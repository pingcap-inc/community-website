import client from '../../client';

export const members = ({ slug }) => {
  return client.get(`/api/orgs/${slug}/members`);
};

export const updateMemberRole = ({ id, role, slug }) => {
  return client.post(`/api/orgs/${slug}/update-member-role`, { id, role });
};
