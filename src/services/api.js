import { create } from 'apisauce';
import app from '../main';

const api = create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://apivinhote.herokuapp.com/api/v1/'
      : 'http://localhost:8000/api/v1/',
});

api.addRequestTransform(() => {
  if (app !== undefined) {
    app.$Progress.start();
  }
});

api.addResponseTransform(() => {
  if (app !== undefined) {
    app.$Progress.finish();
  }
});

export default api;
