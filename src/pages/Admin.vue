<template>
  <div>
    <hero
      color="is-light"
      title="Acesso administrativo"
      :subtitle="currentUser.first_name"
    >
    </hero>
    <zone>
      <div class="columns">
        <div class="column is-4">
          <nav class="panel">
            <p class="panel-heading">
              Usuários
            </p>
            <!-- <div class="panel-block">
              <p class="control has-icons-left">
                <input class="input is-small" type="text" placeholder="search">
                <span class="icon is-small is-left">
                  <i class="fas fa-search"></i>
                </span>
              </p>
            </div> -->
            <!-- <p class="panel-tabs">
              <a class="is-active">all</a>
              <a>public</a>
              <a>private</a>
              <a>sources</a>
              <a>forks</a>
            </p> -->
            <a
              class="panel-block"
              v-for="(u, index) in user.results"
              v-bind:key="index"
              @click="selectUser(u, index)"
              :class="{
                'is-active': index === indexUser,
                'has-text-primary': index === indexUser,
              }"
            >
              <span class="panel-icon">
                <img :src="u.avatar">
              </span>
              {{ u.username }}
            </a>
          </nav>
        </div>
        <div class="column is-half">
          <MediaObject
            v-if="userSelected !== null"
            :imageurl="userSelected.avatar"
            imagesize='is-64x64'>
            <span slot="header">
              <strong>{{ userSelected.first_name }} {{ userSelected.last_name }}</strong> -
              <small>{{ userSelected.email }}</small>
            </span>
            <span slot="text">
              {{ userSelected.username }}
              <br>
              <span v-if="userSelected.is_active" class="tag is-success is-rounded">Ativo</span>
              <span v-if="userSelected.is_staff" class="tag is-warning is-rounded">Admin</span>
              <span
                v-if="userSelected.is_superuser"
                class="tag is-danger is-rounded">
                Super User
              </span>
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

  async mounted() {
    await this.fetchUsers();

    if (this.user.results.length > 0) {
      this.userSelected = this.user.results[0];
    }
  },

  data() {
    return {
      userSelected: null,
      indexUser: 0,
    };
  },

  methods: {
    ...mapActions({
      fetchUsers: 'user/FETCH_USER',
    }),

    selectUser(user, index) {
      this.userSelected = user;
      this.indexUser = index;
    },
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
