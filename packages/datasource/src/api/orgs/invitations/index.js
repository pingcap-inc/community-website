import client from '../../client';

export const responseInvitation = ({ id, action }) => {
  return client.post(`/api/orgs/invitations/${id}`, {
    action,
  });
};
