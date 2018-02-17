<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" exact class="navbar-item">
          <img src="static/logo.png" alt="Portifólio logo" width="112" height="28">
        </router-link>
        <span
          @click="clickMenu"
          class="navbar-burger burger"
          data-target="navbarMenuHeroA"
          :class="{'is-active': isMenuActive}"
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenuHeroA" class="navbar-menu" :class="{'is-active': isMenuActive}">
        <div class="navbar-start is-hidden-touch">
          <a
            class="navbar-item"
            v-for="(social, index) of socialNetworks"
            :href="social.link" target="__blank"
            :key="index"
          >
            <span class="icon">
              <i class="fab" :class="social.icon"></i>
            </span>
          </a>
        </div>
        <div class="navbar-end">
          <router-link
            @click.native="clickMenu"
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
      isMenuActive: false,
      routes: routes.filter(r => r.path !== '/'),
    };
  },

  methods: {
    clickMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
  },

  computed: {
    ...mapGetters({
      socialNetworks: 'GET_SOCIAL_NETWORKS',
    }),
  },
};
</script>

<style></style>
