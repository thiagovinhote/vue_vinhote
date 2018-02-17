// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Buefy from 'buefy';
import linkify from 'vue-linkify';
import VueAwesomeSwiper from 'vue-awesome-swiper';
// import 'swiper/dist/css/swiper.css';
import 'buefy/lib/buefy.css';
import 'bulma-carousel/dist/bulma-carousel.min.css';
import 'bulma-carousel/dist/carousel';
import 'bulma-timeline/dist/bulma-timeline.min.css';

import App from '@/App';
import router from '@/router';
import store from '@/store';

Vue.use(Buefy);
Vue.directive('linkified', linkify);
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
