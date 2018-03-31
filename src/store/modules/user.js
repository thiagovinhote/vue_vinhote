import api from '@/services/api';
import * as _ from 'lodash';

const INITIAL_STATE = {
  data: [],
  loading: false,
};

const getters = {
  GET_USERS({ data }) {
    return data;
  },

  IS_LOADING({ loading }) {
    return loading;
  },

  IS_EMPTY({ data }) {
    return _.isEmpty(data);
  },
};

const actions = {
  async FETCH_USER(context) {
    context.commit('SET_LOADING', true);
    const response = await api.get('users/');
    context.commit('USERS_RECEIVE', response.data);
    context.commit('SET_LOADING', false);
  },
};

const mutations = {
  USERS_RECEIVE(state, users) {
    state.data = users;
  },

  SET_LOADING(state, loading) {
    state.loading = loading;
  },
};

export default {
  namespaced: true,
  state: INITIAL_STATE,
  getters,
  actions,
  mutations,
};
