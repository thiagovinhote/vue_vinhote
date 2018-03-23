<template>
  <div>
    <Hero
      size="is-medium"
      color="is-dark"
      title="Thiago Vinhote Fonseca"
      subtitle="Developer"
      position="has-text-centered"
    >
      <div class="content">
        <img class="is-circle is-250x250" src="static/photo_2.png">
      </div>
    </Hero>

    <Zone
      color="is-lght"
    >
      <div class="content">
        <p class="title is-4 has-text-centered">Resumo</p>
        <div class="columns">
          <div class="column is-half">
            <p class="subtitle">Profissional</p>
            Sou um desenvolvedor Web e Mobile, sempre pronto para o desenvolvimento de projetos
            inovadores. Me mantendo atualizado em relação às novas tecnologias que surgem no
            mercado, para resolver os desafios aplicando a tecnologia que melhor se encaixar.
          </div>
          <div class="column is-half">
            <p class="subtitle">Pessoal</p>
            Como todo ser humano, gosto de uma boa conversa, compartilhar o conhecimento,
            ter novos desafios e poder ter os amigos por perto. Descontrair de vez
            em quando, comer aquela comida boa e tomar uma ótima brêja com os 'brothers'.
          </div>
        </div>
      </div>
    </Zone>

    <Zone
      color="is-light"
    >
      <div class="columns">
        <div class="column has-text-centered" v-for="(plataform, index) of plataforms" :key="index">
          <span class="icon is-large">
            <i class="fas fa-3x" :class="plataform.icon"></i>
          </span>
          <p class="title is-4 is-top-5">{{ plataform.title }}</p>
          <p class="subtitle is-6">{{ plataform.description }}</p>
        </div>
      </div>
      <div class="column is-offset-8 has-text-centered">
        <p class="subtitle is-7">Mas não sou fechado a só usar essas tecnologias</p>
      </div>
    </Zone>
    <zone>
      <Carousel />
    </zone>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Hero from '@/components/Hero';
import Zone from '@/components/Zone';
import Carousel from '@/components/Carousel';

export default {
  components: {
    Hero,
    Zone,
    Carousel,
  },

  methods: {
    ...mapActions({
      fetchWork: 'FETCH_WORK',
    }),
  },

  computed: {
    ...mapGetters({
      plataforms: 'GET_PLATAFORMS',
      work: 'GET_WORK',
    }),
  },
};
</script>

<style scoped>
  .is-top-2 {
    margin-top: 4px;
  }

  .is-top-5 {
    margin-top: 10px;
  }

</style>
