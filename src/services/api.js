import { create } from 'apisauce';

const api = create({
  baseURL: 'http://localhost:8000/api/v1/',
});

export default api;
