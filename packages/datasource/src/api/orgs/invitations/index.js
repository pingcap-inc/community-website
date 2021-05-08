import client from '../../client';

export const responseInvite = ({ id, action }) => {
  return client.post(`/api/orgs/invitations/${id}`, {
    action,
  });
};
