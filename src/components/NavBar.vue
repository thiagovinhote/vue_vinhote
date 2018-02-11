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
        <a class="navbar-item">
          <span class="icon">
            <i class="fab fa-facebook"></i>
          </span>
        </a>
        <a class="navbar-item">
          <span class="icon">
            <i class="fab fa-twitter"></i>
          </span>
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
import { routes } from '@/router';

export default {
  data() {
    return {
      routes: routes.filter(r => r.path !== '/'),
    };
  },
};
</script>

<style></style>
