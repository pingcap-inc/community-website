import axios from 'axios';

export const members = ({ uid }) => {
  return axios.get(`/api/orgs/${uid}/members`);
};
