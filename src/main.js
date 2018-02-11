// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from '@/App';
import router from '@/router';

import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import 'bulma-carousel/dist/bulma-carousel.min.css';
import 'bulma-carousel/dist/carousel';

import 'bulma-timeline/dist/bulma-timeline.min.css';

Vue.use(Buefy);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
