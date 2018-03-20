import api from '@/services/api';

const INITIAL_STATE = {
  data: [],
};

const getters = {
  GET_USERS({ data }) {
    return data;
  },
};

const actions = {
  async FETCH_USER(context) {
    const response = await api.get('users/');
    context.commit('USERS_RECEIVE', response.data);
  },
};

const mutations = {
  USERS_RECEIVE(state, users) {
    state.data = users;
  },
};

export default {
  namespaced: true,
  state: INITIAL_STATE,
  getters,
  actions,
  mutations,
};
