import store from '@/store';

export default (to, from, next) => {
  if (!store.getters['auth/LOGGED_IN']) {
    store.dispatch('auth/LOGOUT');
    return next('/account/login');
  }

  if (to.meta.isAdmin === undefined || !to.meta.isAdmin) {
    return next();
  }

  // if (!store.getters('auth/isAdmin')) {
  //   return next('/');
  // }

  return next();
};
