import blogClient from '../../blogClient';

export const principal = () => {
  return blogClient.get('/api/principal');
};
