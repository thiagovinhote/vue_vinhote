import api from '@/services/api';

const INITIAL_STATE = {
  data: [],
};

const getters = {
  GET_CERTIFICATES({ data }) {
    return data;
  },
};

const actions = {
  async FETCH_CERTIFICATE(context) {
    const response = await api.get('certificates');
    context.commit('CERTIFICATES_RECEIVE', response.data);
  },
};

const mutations = {
  CERTIFICATES_RECEIVE(state, certificates) {
    state.data = certificates;
  },
};

export default {
  namespaced: true,
  state: INITIAL_STATE,
  getters,
  actions,
  mutations,
};
