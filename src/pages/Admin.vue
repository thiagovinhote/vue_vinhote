<template>
  <div>
    <hero
      title="Acesso administrativo"
      :subtitle="currentUser.first_name"
    >
    </hero>
    <zone
      color="is-light"
    >
      <div class="columns is-multiline">
        <div class="column is-half" v-for="(u, index) of user.results" :key="index">
          <MediaObject :imageurl="u.avatar" imagesize='is-64x64'>
            <span slot="header">
              <strong>{{ u.first_name }} {{ u.last_name }}</strong> -
              <small>{{ u.email }}</small>
            </span>
            <span slot="text">
              {{ u.username }}
              <br>
              <span v-if="u.is_active" class="tag is-success is-rounded">Ativo</span>
              <span v-if="u.is_staff" class="tag is-warning is-rounded">Admin</span>
              <span v-if="u.is_superuser" class="tag is-danger is-rounded">Super User</span>
            </span>
          </MediaObject>
        </div>
      </div>
    </zone>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Hero from '@/components/Hero';
import Zone from '@/components/Zone';
import Message from '@/components/Message';
import { MediaObject } from '@/components/media-object';

export default {
  components: {
    Hero,
    Zone,
    MediaObject,
    Message,
  },

  mounted() {
    this.fetchUsers();
  },

  methods: {
    ...mapActions({
      fetchUsers: 'user/FETCH_USER',
    }),
  },

  computed: {
    ...mapGetters({
      currentUser: 'auth/GET_USER',
      user: 'user/GET_USERS',
    }),
  },
};
</script>

<style></style>
