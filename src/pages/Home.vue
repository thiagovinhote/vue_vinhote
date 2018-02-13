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
        <img class="is-circle is-250x250" src="https://scontent.fbsb1-1.fna.fbcdn.net/v/t1.0-9/13095896_933513143414062_1336776631130582505_n.jpg?oh=0e16119681af556b805bdb3b758c3640&oe=5B16B8B4">
      </div>
    </Hero>

    <Zone
      color="is-lght"
    >
      <div class="content">
        <p class="title is-4 has-text-centered">Sobre mim</p>
        <ul>
          <li>
            Sou um desenvolvedor web e mobile, sempre se atualizando com as novas tecnologias que surgem no mercado, para melhor resolver um desafio com a solução que melhor se encaixa. Experiência de 2 anos na Apple Developer Academy com desenvolvimento especifico para iOS, watchOS e tvOS. Prática com metodologias como: Scrum, MVP e CBL. 
          </li>
          <li>
            Desenvolvo para web tanto no Back-End implementado API's quanto no Front-End criando aplicações visuais.
            No mobile, posso desenvolver tanto aplicações com código nativo com Swift(iOS) ou Java(Android) quanto com bibliotecas como o React-Native(JavaScript).
          </li>
        </ul>
      </div>
    </Zone>

    <Zone
      color="is-light"
    >
      <div class="columns">
        <div class="column has-text-centered" v-for="plataform of plataforms">
          <span class="icon is-large">
            <i class="fas fa-3x" :class="plataform.icon"></i>
          </span>
          <p class="title is-4 is-top-5">{{ plataform.title }}</p>
          <p class="subtitle is-6">{{ plataform.description }}</p>
        </div>
      </div>
    </Zone>

    <Zone
      color="is-info"
    >
      <div class="content">
        <p class="title is-4 has-text-centered">Trabalhos</p>
      </div>
      <Carousel />
    </Zone>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Hero from '@/components/Hero';
import Zone from '@/components/Zone';
import Carousel from '@/components/Carousel';

export default {
  components: {
    Hero,
    Zone,
    Carousel,
  },

  computed: {
    ...mapGetters({
      plataforms: 'GET_PLATAFORMS',
    }),
  },
};
</script>

<style scoped>

  .is-horizontal-center {
    justify-content: center;
  }

  .is-circle {
    border-radius: 50%;
    object-fit: cover;
    object-position: center right;
  }

  .is-250x250 {
    height: 300px;
    width: 300px;
  }

  .is-top-2 {
    margin-top: 4px;
  }

  .is-top-5 {
    margin-top: 10px;
  }

</style>
