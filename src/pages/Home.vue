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
      color="is-light"
    >
      <div class="content">
        <p class="title is-4 has-text-centered">Sobre mim</p>
        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.</p>
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
      color="is-primary"
    >
      <Carousel />
    </Zone>
  </div>
</template>

<script>
import Hero from '@/components/Hero';
import Zone from '@/components/Zone';
import Carousel from '@/components/Carousel';

export default {
  components: {
    Hero,
    Zone,
    Carousel,
  },

  data() {
    return {
      plataforms: [
        { title: 'Mobile', description: 'Progamação com linguagem native e com React-Native', icon: 'fa-mobile-alt' },
        { title: 'Front-End', description: 'Usando tecnologias como AngularJS, ReactJS e VueJS', icon: 'fa-desktop' },
        { title: 'Back-End', description: 'Node e Python no lado do back-end', icon: 'fa-code' },
      ],
    };
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
