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

  IS_ADMIN({ user }) {
    return (typeof user.is_superuser !== 'undefined' && user.is_superuser);
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

  async AUTHENTICATE({ commit, dispatch, state }) {
    const response = await api.get('rest-auth/user/');
    const { data, ok } = response;

    if (ok) {
      commit('SET_LOGGED_IN', true);
      commit('SET_USER', data);
    } else {
      dispatch('REFRESH_TOKEN', state.token);
    }
  },

  async REFRESH_TOKEN({ commit }, token) {
    const response = await api.post('rest-auth/refresh/', { token });
    const { data, ok } = response;

    if (ok) {
      commit('SET_ACCESS_TOKEN', data.token);
    } else {
      commit('SET_LOGGED_IN', false);
      commit('SET_USER', false);
      commit('CLEAR_ACCESS_TOKEN', false);
    }
  },

  async LOGOUT({ commit }) {
    await api.post('rest-auth/logout/');

    commit('SET_LOGGED_IN', false);
    commit('SET_USER', false);
    commit('CLEAR_ACCESS_TOKEN', false);
  },

  async UPDATE_USER(context, data) {
    const userId = context.getters.get('GET_USER').id;
    const response = await api.patch(`users/${userId}/`, data);
    context.commit('SET_USER', response.data);
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
    api.setHeader('Authorization', `Bearer ${token}`);
  },

  CLEAR_ACCESS_TOKEN(state) {
    localStorage.removeItem('accessToken');
    state.token = false;
    api.setHeader('Authorization', '');
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
