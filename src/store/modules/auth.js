import api from '@/services/api';

const INITIAL_STATE = {
  loggedin: false,
  message: '',
  user: false,
  token: false,
};

const getters = {
  GET_USER({ user }) {
    return user;
  },

  LOGGED_IN({ loggedin }) {
    return loggedin;
  },

  GET_ACCESS_TOKEN({ token }) {
    return token;
  },

  GET_MESSAGE({ message }) {
    return message;
  },

  AUTH(state) {
    return state;
  },
};

const actions = {
  async LOGIN({ commit }, credentials) {
    commit('SET_MESSAGE', '');
    const response = await api.post('rest-auth/login/', credentials);
    const { data, ok } = response;

    if (ok) {
      commit('SET_LOGGED_IN', true);
      commit('SET_USER', data.user);
      commit('SET_ACCESS_TOKEN', data.token);
    } else {
      const [message] = data.non_field_errors;
      commit('SET_MESSAGE', message);
      commit('SET_LOGGED_IN', false);
    }
  },

  async AUTHENTICATE({ commit }) {
    const response = await api.post('rest-auth/user/');
    const { data } = response;

    commit('SET_LOGGED_IN', true);
    commit('SET_USER', data);
  },

  async LOGOUT({ commit }) {
    await api.post('rest-auth/logout/');

    commit('SET_LOGGED_IN', false);
    commit('SET_USER', false);
    commit('CLEAR_ACCESS_TOKEN', false);
  },
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },

  CLEAR_USER(state) {
    state.user = false;
  },

  SET_ACCESS_TOKEN(state, token) {
    localStorage.setItem('accessToken', token);
    state.token = token;
  },

  CLEAR_ACCESS_TOKEN(state) {
    localStorage.removeItem('accessToken');
    state.token = false;
  },

  SET_LOGGED_IN(state, status) {
    state.loggedin = status;
  },

  SET_MESSAGE(state, message) {
    state.message = message;
  },

};

export default {
  namespaced: true,
  state: INITIAL_STATE,
  getters,
  actions,
  mutations,
};
