<template>
  <footer class="footer hero is-dark">
    <div class="container">
      <div class="content">
        <div class="columns">
          <div class="column is-three-quarters">
            <div class="columns">
              <div class="column is-6">
                <p class="title">Portifólio</p>
                <p class="subtitle is-6">
                  Desenvolvedor Web e Mobile, sempre pronto para o desenvolvimento de projetos inovadores
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <p>Redes sociais</p>
            <span class="icon is-medium">
              <i class="fab fa-github fa-2x"></i>
            </span>
            <span class="icon is-medium" v-for="social of socialNetworks">
              <i class="fab fa-2x" :class="social.icon"></i>
            </span>
          </div>
        </div>
      </div>
      <hr/>
      <div class="content has-text-centered">
        <span class="icon">
          <i class="far fa-copyright"></i>
        </span>
        2018 - Portifólio. All rights reserved
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      socialNetworks: 'GET_SOCIAL_NETWORKS',
    }),
  },
};
</script>

<style>
</style>
