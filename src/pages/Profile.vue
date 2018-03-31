<template>
  <div>
    <Hero
      title="Perfil"
      subtitle="Saiba mais detalhes ao meu respeito"
      color="is-light"
    />

    <Zone
      v-parallax="0.02"
      color="is-default"
    >
      <div class="columns">
        <div class="column is-half">
          <h1 class="title is-4">Sobre mim</h1>
          <div class="content">
            <p class="subtitle">
              <ul>
                <li>
                  Sou um desenvolvedor <i>web</i> e <i>mobile</i>, sempre
                  me atualizando com as novas tecnologias que surgem no
                  mercado, para resolver os desafios aplicando a tecnologia
                  que melhor se encaixar.
                </li>
                <br/>
                <li>
                  Experiência de 2 anos na Apple Developer Academy com desenvolvimento
                  específico para iOS, watchOS e tvOS. Práticas com as metodologias
                  Scrum, MVP e CBL.
                </li>
                <br/>
                <li>
                  Desenvolvo para web tanto no Back-End implementando APIs quanto no
                  Front-End criando aplicações visuais. No mobile, posso desenvolver tanto
                  aplicações com código nativo com Swift(iOS) ou Java(Android) quanto com
                  bibliotecas como o React-Native(JavaScript).
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div class="column is-offset-1 has-text-centered" v-parallax="0.1">
          <div class="content">
            <img class="is-circle is-250x250" src="static/photo_2.png">
          </div>
        </div>
      </div>
    </Zone>

    <Zone color="is-light" v-parallax="0.02">
      <div class="columns">
        <div class="column is-4">
          <h1 class="title">Minhas redes sociais</h1>
          <h2 class="subtitle">Dá uma olhada</h2>
        </div>
        <div class="column">
          <div class="columns is-multiline">
            <div
              v-for="(social, index) of socials"
              class="column"
              :key="index"
            >
              <a
                :href="social.link"
                target="__blank"
                class="button"
                :class="getColor(index)"
              >
                <span class="icon">
                  <i class="fab" :class="social.icon"></i>
                </span>
                <span>{{ social.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <h1 class="title">Contato</h1>
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">
              <span class="icon">
                <i class="fas fa-inbox"></i>
              </span> Email
            </p>
            <p class="subtitle">thiago.esw@gmail.com</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">
              <span class="icon">
                <i class="fas fa-phone"></i>
              </span> Telefone
            </p>
            <p class="subtitle">(092) 99428-3875</p>
          </div>
        </div>
      </nav>
    </Zone>

    <!-- <Zone
      color="is-dark"
    >
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Tweets</p>
            <p class="title">3,456</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Following</p>
            <p class="title">123</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Followers</p>
            <p class="title">456K</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Likes</p>
            <p class="title">789</p>
          </div>
        </div>
      </nav>
    </Zone> -->

    <!-- <Zone
      color="is-light"
      size="is-medium"
    >
      <h1 class="title">Amigos</h1>
      <hr/>
      <div class="columns is-multiline is-desktop">
        <div v-for="amigo of amigos" class="column is-one-quarter">
          <MediaObject imagesize="is-64x64">
            <h1 slot="header" class="title is-5">
              {{ amigo.name }}
            </h1>
          </MediaObject>
        </div>
      </div>
    </Zone> -->
    <Zone color="is-info">
    </Zone>
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

  data() {
    return {
      amigos: [
        { name: 'Fulano' },
        { name: 'Cicrano' },
        { name: 'Beltrano' },
        { name: 'Fulano' },
        { name: 'Cicrano' },
        { name: 'Beltrano' },
      ],
    };
  },

  methods: {
    getColor(index) {
      const colors = [
        'is-primary',
        'is-info',
        'is-warning',
        'is-dark',
        'is-danger',
        '',
      ];
      const position = index % colors.length;
      return colors[position];
    },
  },

  computed: {
    ...mapGetters({
      socials: 'GET_SOCIAL_NETWORKS',
    }),
  },
};
</script>

<style>
</style>
