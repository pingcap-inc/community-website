import axios from 'axios';

// a lighter client without much custom configs
const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL ?? '',
});

export default client;
