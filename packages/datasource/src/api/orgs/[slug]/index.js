import client from '../../client';

export const info = ({ slug }) => {
  return client.get(`/api/orgs/${slug}`);
};

export const updateInfo = ({ slug, data }) => {
  return client.put(`/api/orgs/${slug}`, data);
};

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

export const topics = ({ slug, page, pageSize }) => {
  return client.get(`/api/orgs/${slug}/topics`, { params: { page, page_size: pageSize } });
};

export const topicUrgencies = ({ slug, topicId }) => {
  return client.get(`/api/orgs/${slug}/topic-urgencies`, { params: { topic_id: topicId } });
};

export const urgeTopic = ({ slug, topicId }) => {
  return client.post(`/api/orgs/${slug}/topic-urgencies`, { topic_id: topicId });
};
