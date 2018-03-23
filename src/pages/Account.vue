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
        <button
          class="button is-info"
          @click="openModal()"
        >
          Editar perfil
        </button>
        <div class="modal" :class="{'is-active': modalActive }">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Perfil</p>
              <button class="delete" @click="closeModal()" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
              <div class="field">
                <label class="label">Primeiro nome</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Insira aqui seu primeiro nome"
                    v-model="data.first_name"
                  >
                </div>
                <!-- <p class="help">This is a help text</p> -->
              </div>
              <div class="field">
                <label class="label">Segundo nome</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Insira aqui seu segundo nome"
                    v-model="data.last_name"
                  >
                </div>
                <!-- <p class="help">This is a help text</p> -->
              </div>
            </section>
            <footer class="modal-card-foot">
              <button
                class="button is-success"
                @click="save(data)"
              >Salvar</button>
              <button class="button" @click="closeModal()">Cancelar</button>
            </footer>
          </div>
        </div>
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

export default {
  components: {
    Hero,
    Zone,
    MediaObject,
  },

  data() {
    return {
      modalActive: false,
      data: {},
    };
  },

  methods: {
    ...mapActions({
      update: 'auth/UPDATE_USER',
    }),

    openModal() {
      this.modalActive = true;
    },

    closeModal() {
      this.modalActive = false;
    },

    async save(data) {
      await this.update(data);
      this.closeModal();
      this.data = {};
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
