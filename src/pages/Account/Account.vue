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
          <span v-if="currentUser.is_active" class="tag is-success is-rounded">Ativo</span>
          <span v-if="currentUser.is_staff" class="tag is-warning is-rounded">Admin</span>
          <span
            v-if="currentUser.is_superuser"
            class="tag is-danger is-rounded">
            Super User
          </span>
        </span>
      </MediaObject>
      <br>
      <div>
        <EditPhoto :image="currentUser.avatar" @save="save" />
        <EditProfile @save="save"/>
      </div>
    </Zone>
    <Zone size="is-large"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Hero from '@/components/Hero';
import Zone from '@/components/Zone';
import { MediaObject } from '@/components/media-object';
import EditProfile from './EditProfile';
import EditPhoto from './EditPhoto';

export default {
  components: {
    Hero,
    Zone,
    MediaObject,
    EditProfile,
    EditPhoto,
  },

  methods: {
    ...mapActions({
      update: 'auth/UPDATE_USER',
    }),

    async save(data) {
      await this.update(data);
    },
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
