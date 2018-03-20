<template>
  <div>
    <Hero
      title="Conta"
      subtitle="Suas informaões pessoais"
      color="is-info"
    />
    <Zone
      color="is-light"
    >
      <MediaObject :imageurl="currentUser.avatar">
        <span slot="header">
          <strong> {{ currentUser.first_name }}</strong>
          <strong> {{ currentUser.last_name }}</strong>
        </span>
        <span slot="text">
          <p>
            username: {{ currentUser.username }}
            <br>
            email: {{ currentUser.email }}
          </p>
        </span>
      </MediaObject>
    </Zone>
    <Zone size="is-large"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Hero from '@/components/Hero';
import Zone from '@/components/Zone';
import { MediaObject } from '@/components/media-object';

export default {
  components: {
    Hero,
    Zone,
    MediaObject,
  },

  computed: {
    ...mapGetters({
      currentUser: 'auth/GET_USER',
    }),
  },
};
</script>

<style>
</style>
