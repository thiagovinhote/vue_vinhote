import api from '@/services/api';

const INITIAL_STATE = {
  data: [],
};

const getters = {
  GET_PROJECTS({ data }) {
    return data;
  },
};

const actions = {
  async FETCH_PROJECT(context, page) {
    context.commit('PROJECTS_RECEIVE', []);
    const response = await api.get(`projects/?page=${page}`);
    context.commit('PROJECTS_RECEIVE', response.data);
  },
};

const mutations = {
  PROJECTS_RECEIVE(state, projects) {
    state.data = projects;
  },
};

export default {
  namespaced: true,
  state: INITIAL_STATE,
  getters,
  actions,
  mutations,
};
