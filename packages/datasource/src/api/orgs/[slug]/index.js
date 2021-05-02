import axios from 'axios';

export const members = ({ slug }) => {
  return axios.get(`/api/orgs/${slug}/members`);
};
