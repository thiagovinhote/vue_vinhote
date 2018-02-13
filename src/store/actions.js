import api from '@/services/api';

export default {
  async 'FETCH_PROJECTS' (context) {
    const response = await api.get('work/');
    context.commit('PROJECTS_RECEIVE', response.data);
  },
};
