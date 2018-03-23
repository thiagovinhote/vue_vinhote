<template>
  <Zone
    color="is-light"
    size="is-large"
    vertical="start"
  >
    <div class="container">
      <div class="column is-4 is-offset-4">
        <div class="content has-text-centered">
          <h1 class="title has-text-grey">Cadastro</h1>
          <p class="subtitle has-text-grey is-6">Faça seu cadastro</p>
        </div>
        <pre>
        </pre>
        <div class="box">
          <form>
            <div class="field">
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Seu nome de usuário"
                  autofocus=""
                  v-model="user.username"
                />
              </div>
              <p class="help is-danger">{{ messageUsername }}</p>
            </div>

            <hr>

            <div class="field">
              <div class="control">
                <input
                  class="input"
                  type="email"
                  placeholder="Seu email"
                  autofocus=""
                  v-model="user.email"
                />
              </div>
              <p class="help is-danger">{{ messageEmail }}</p>
            </div>

            <div class="field">
              <div class="control">
                <input
                  class="input"
                  type="password"
                  placeholder="Sua senha"
                  v-model="user.password"
                />
              </div>
              <p class="help is-danger">{{ messagePassword }}</p>
            </div>
            <!-- <div class="field">
              <label class="checkbox">
                <input type="checkbox">
                Remember me
              </label>
            </div> -->
            <div class="field">
              <button
                type="submit"
                class="button is-block is-success is-fullwidth"
                @click.prevent="registerUser(user)"
              >
                Registra-se
              </button>
            </div>
            <div class="field">
              <button
                type="submit"
                class="button is-block is-dark is-fullwidth"
                @click.prevent="voltar()"
              >
                Voltar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Zone>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Zone from '@/components/Zone';

export default {
  components: {
    Zone,
  },

  data() {
    return {
      user: {
        username: '',
        email: '',
        password: '',
      },
    };
  },

  methods: {
    ...mapActions({
      register: 'register/REGISTER',
      loggedIn: 'auth/LOGGED_IN',
      login: 'auth/LOGIN',
    }),

    async registerUser(user) {
      const userData = user;
      userData.password1 = user.password;
      userData.password2 = user.password;
      await this.register(userData);

      // if (this.loggedIn) {
      //   await this.login(user);
      //   this.$router.push('/account/profile');
      // }
    },

    voltar() {
      this.$router.push('/account/login/');
    },
  },

  computed: {
    ...mapGetters({
      registration: 'register/GET_REGISTRATION',
      messageEmail: 'register/GET_MESSAGE_EMAIL',
      messagePassword: 'register/GET_MESSAGE_PASSWORD',
      messageUsername: 'register/GET_MESSAGE_USERNAME',
    }),
  },
};
</script>

<style scoped>

</style>
