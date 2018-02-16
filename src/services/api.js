import { create } from 'apisauce';

const api = create({
  baseURL: process.env.NODE_ENV === 'production'
    ? 'https://apivinhote.herokuapp.com/api/v1/'
    : 'http://localhost:8000/api/v1/',
});

export default api;
