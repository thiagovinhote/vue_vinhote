import store from '@/store';

export default (to, from, next) => {
  const accessToken = localStorage.getItem('accessToken');

  store.commit('auth/SET_ACCESS_TOKEN', accessToken);
  next();
};
