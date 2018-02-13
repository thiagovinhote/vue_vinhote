<template>
  <nav class="navbar is-dark">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" exact class="navbar-item">
          <img src="static/logo.png" alt="Portifólio logo" width="112" height="28">
        </router-link>
        <span class="navbar-burger burger" data-target="navbarMenuHeroA">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div class="navbar-start">
        <a class="navbar-item" v-for="social of socialNetworks" :href="social.link" target="__blank">
          <span class="icon">
            <i class="fab" :class="social.icon"></i>
          </span>
        </a>
        </a>
      </div>
      <div id="navbarMenuHeroA" class="navbar-menu">
        <div class="navbar-end">
          <router-link
            v-bind:key="route.path"
            :to="route.path"
            class="navbar-item"
            v-for="route of routes"
          >
            {{ route.title }}
          </router-link>
          <!-- <span class="navbar-item">
            <a class="button is-primary is-inverted">
              <span class="icon">
                <i class="fab fa-github"></i>
              </span>
              <span>Download</span>
            </a>
          </span> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';
import { routes } from '@/router';

export default {
  data() {
    return {
      routes: routes.filter(r => r.path !== '/'),
    };
  },

  computed: {
    ...mapGetters({
      socialNetworks: 'GET_SOCIAL_NETWORKS',
    }),
  },
};
</script>

<style></style>
