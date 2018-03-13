import api from '@/services/api';

const INITIAL_STATE = {
  data: [],
};

const getters = {
  GET_SKILLS({ data }) {
    return data;
  },
};

const actions = {
  async FETCH_SKILL(context) {
    const response = await api.get('skills');
    context.commit('SKILLS_RECEIVE', response.data);
  },
};

const mutations = {
  SKILLS_RECEIVE(state, skills) {
    state.data = skills;
  },
};

export default {
  namespaced: true,
  state: INITIAL_STATE,
  getters,
  actions,
  mutations,
};
