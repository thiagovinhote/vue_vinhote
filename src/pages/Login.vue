<template>
  <section class="hero is-light is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Acesse sua conta</h3>
          <p class="subtitle is-6 has-text-danger">{{ messageStatus }}</p>
          <!-- <pre>
            {{ auth }}
          </pre> -->
          <div class="box">
            <figure class="avatar">
              <img src="/static/logo_2.png">
            </figure>
            <form>
              <div class="field">
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Seu nome de usuário"
                    autofocus=""
                    v-model="user.username" />
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input
                    class="input"
                    type="password"
                    placeholder="Sua senha"
                    v-model="user.password" />
                </div>
              </div>
              <!-- <div class="field">
                <label class="checkbox">
                  <input type="checkbox">
                  Remember me
                </label>
              </div> -->
              <button
                type="submit"
                class="button is-block is-info is-fullwidth"
                @click.prevent="loginUser(user)"
              >
                Entrar
              </button>
            </form>
          </div>
          <p class="has-text-grey">
            <router-link
              to="/account/register/"
            >Registrar-se</router-link>
             <!-- &nbsp;·&nbsp; -->
            <!-- <a href="../">Forgot Password</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a> -->
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },

  methods: {
    ...mapActions({
      login: 'auth/LOGIN',
    }),

    async loginUser(user) {
      await this.login(user);
      const { loggedin } = this.auth;

      if (loggedin) {
        this.$router.push('/account');
      }
    },
  },

  computed: {
    ...mapGetters({
      auth: 'auth/AUTH',
      messageStatus: 'auth/GET_MESSAGE',
    }),
  },
};
</script>

<style>
  .box {
    margin-top: 5rem;
  }

  .hero.is-fullheight .hero-body {
    align-items: flex-start;
  }

  .avatar {
    margin-top: -70px;
    padding-bottom: 20px;
  }

  .avatar img {
    padding: 5px;
    background: #fff;
    border-radius: 50%;
    width: 128px;
    height: 128px;
    -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  }

  p.subtitle {
    padding-top: 1rem;
  }
</style>
