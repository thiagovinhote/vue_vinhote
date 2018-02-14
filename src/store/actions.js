import api from '@/services/api';

export default {
  async 'FETCH_WORK' (context) {
    const response = await api.get('work/');
    context.commit('WORK_RECEIVE', response.data);
  },

  async 'FETCH_PROJECTS' (context, page) {
    const response = await api.get(`projects/?page=${page}`);
    context.commit('PROJECTS_RECEIVE', response.data);
  },
};
