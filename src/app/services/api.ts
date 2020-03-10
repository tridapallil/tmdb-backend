import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL,
});

api.interceptors.request.use((config) => {
  config.params = { ...config.params, api_key: process.env.API_TOKEN };
  return config;
});

export default api;
