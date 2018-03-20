import api from '@/services/api';

const INITIAL_STATE = {
  registration: false,
  message: {},
};

const getters = {
  GET_MESSAGE_EMAIL({ message }) {
    if (message.email === undefined) {
      return '';
    }
    return message.email[0];
  },

  GET_MESSAGE_PASSWORD({ message }) {
    if (message.password1 === undefined) {
      return '';
    }
    return message.password1[0];
  },

  GET_MESSAGE_USERNAME({ message }) {
    if (message.username === undefined) {
      return '';
    }
    return message.username[0];
  },

  GET_REGISTRATION({ registration }) {
    return registration;
  },
};

const actions = {
  async REGISTER({ commit }, user) {
    commit('SET_MESSAGE', {});
    const response = await api.post('rest-auth/registration/', user);
    const { data, ok } = response;

    if (ok) {
      commit('SET_REGISTRATION', true);
      commit('SET_MESSAGE', {});
    } else {
      commit('SET_REGISTRATION', false);
      commit('SET_MESSAGE', data);
    }
  },
};

const mutations = {
  SET_MESSAGE(state, message) {
    state.message = message;
  },

  SET_REGISTRATION(state, status) {
    state.registration = status;
  },
};

export default {
  namespaced: true,
  state: INITIAL_STATE,
  getters,
  actions,
  mutations,
};
