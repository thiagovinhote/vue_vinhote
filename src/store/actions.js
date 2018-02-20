import api from '@/services/api';

export default {
  async FETCH_WORK(context, isStore = false) {
    const response = await api.get(`work/?is_store=${isStore}`);
    context.commit('WORK_RECEIVE', response.data);
  },

  async FETCH_PROJECT(context, page) {
    context.commit('PROJECT_RECEIVE', {});
    const response = await api.get(`projects/?page=${page}`);
    context.commit('PROJECT_RECEIVE', response.data);
  },

  async FETCH_EXPERIENCE(context) {
    const response = await api.get('experiences/');
    context.commit('EXPERIENCE_RECEIVE', response.data);
  },

  async FETCH_SKILL(context) {
    const response = await api.get('skills');
    context.commit('SKILL_RECEIVE', response.data);
  },
};
