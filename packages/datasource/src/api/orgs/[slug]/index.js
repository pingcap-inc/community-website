import client from '../../client';

export const members = ({ slug }) => {
  return client.get(`/api/orgs/${slug}/members`);
};
