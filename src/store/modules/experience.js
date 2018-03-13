import api from '@/services/api';

const INITIAL_STATE = {
  data: [],
};

const getters = {
  GET_EXPERIENCES({ data }) {
    return data;
  },
};

const actions = {
  async FETCH_EXPERIENCE(context) {
    const response = await api.get('experiences/');
    context.commit('EXPERIENCES_RECEIVE', response.data);
  },
};

const mutations = {
  EXPERIENCES_RECEIVE(state, experiences) {
    state.data = experiences;
  },
};

export default {
  namespaced: true,
  state: INITIAL_STATE,
  getters,
  actions,
  mutations,
};
