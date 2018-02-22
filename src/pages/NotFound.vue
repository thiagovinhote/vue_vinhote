<template>
  <Zone size="is-large has-text-centered is-light">
    <h1 class="title is-1">404</h1>
    <h1 class="title">Página não encontrada</h1>
    <p>
      Ir para o <strong><router-link to="/" class="has-text-info">início</router-link></strong>
    </p>
  </Zone>
</template>

<script>
import Zone from '@/components/Zone';

export default {
  components: {
    Zone,
  },
};
</script>

<style></style>
