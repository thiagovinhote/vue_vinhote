import api from '@/services/api';

const INITIAL_STATE = {
  data: [],
};

const getters = {
  GET_WORKS({ data }) {
    return data;
  },
};

const actions = {
  async FETCH_WORK(context, isStore = false) {
    const response = await api.get(`work/?is_store=${isStore}`);
    context.commit('WORKS_RECEIVE', response.data);
  },
};

const mutations = {
  WORKS_RECEIVE(state, work) {
    state.data = work;
  },
};

export default {
  namespaced: true,
  state: INITIAL_STATE,
  getters,
  actions,
  mutations,
};
