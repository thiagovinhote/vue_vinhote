import store from '@/store';

export default async (to, from, next) => {
  const accessToken = localStorage.getItem('accessToken');
  const hasToken = accessToken !== 'null' && accessToken !== null;
  if (hasToken) {
    store.commit('auth/SET_ACCESS_TOKEN', accessToken);
    await store.dispatch('auth/AUTHENTICATE');
  }

  if (!store.getters['auth/LOGGED_IN'] && hasToken) {
    await store.dispatch('auth/REFRESH_TOKEN', accessToken);
    await store.dispatch('auth/AUTHENTICATE');
  }

  next();
};
