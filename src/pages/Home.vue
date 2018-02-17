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
        <img class="is-circle is-250x250 is-mask-circle" src="static/photo.png">
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
            inovadores. Me mantendo atualizado em relação as novas tecnologias que surgem no
            mercado, para resolver os desafios aplicando a tecnologia que melhor se encaixar.
          </div>
          <div class="column is-half">
            <p class="subtitle">Pessoal</p>
            E também, como todo ser humano, gosto de uma boa conversar, compartilhar o conhecimento,
            ter novos desafios e poder ter os amigos por perto. Descontrair de vez em quando,
            comer aquela comida boa e tomar uma boa brêja com os 'brothers'.
          </div>
          <!-- <div class="column is-half">
            <Carousel :perview="1">
              <swiper-slide slot="swiper-slide" v-for="image of images">
                <figure class="image is-4by3">
                  <img :src="image.url" alt="Placeholder image">
                </figure>
              </swiper-slide>
            </Carousel>
          </div> -->
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

    <!-- <Zone
      color="is-primary"
    >
      <div class="content">
        <p class="title is-4 has-text-centered">Trabalhos</p>
      </div>
      <Carousel>
        <swiper-slide slot="swiper-slide" v-for="item of work.results">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="item.image" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                {{ item.description }}
              </div>
            </div>
          </div>
        </swiper-slide>
      </Carousel>
    </Zone> -->
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

  mounted() {
    // this.fetchWork();
  },

  data() {
    return {
      // images: [
      //   { url: 'https://lh3.googleusercontent.com/pGf8h07_2B8gnFup_gxsWcQKeaZ1cx5VuCENIKWngMHhR3nQHMk_zPbQVCh3XiYrIJoWiC0Xjha9ibiR-HSnXcHCkCWTxvEtGA6TOZHKGqTOIiMB3RMuAL-fuMQKdSngzw0YzY37fr3_CGCT6id6uj7z7pBEO1-3LjR5U4A3UKh9BjKI5XuifEYPkqR6nMSr-tpR7GiwhqSAHZss7mq3q0dvXctJ4NqY8IIl5Z1jJZ06pmbTSKYC8NY2NbZ79uhAT81OS83mtUz7AkxeoCzXA6xPV20i_HC_H_27rN8UaNbPylqyz37OOu704nASw8v4WnhWJD8J1SvM-7-6Rr5W4H-9XUDrxrtDZjS9O11GdaTUlXsxQR3vIsYANoCdgcnFl_pzC3FF_7RyPrN-qD3t6yo1T6N7Dv9XBlA4ti-NL8KsfLHx3C8459iBrXViquTBIsw7hVAIM-gC2Iox9P2HSpbcQy9Stu8c7FoC2QZs8t1C5hEKPbIIp-NOZcIg7nVM0Ib6dguvJZioDqn0qsP24N6yldUCQ_DDSneQUJf8sG7h2UsGFdRMRZ4_Ax9ILQmyoJxbIzWRMq7WiphaJkDjH8ztR_0sEwKw3qz1DFI=w2200-h1652-no' },
      //   { url: 'https://lh3.googleusercontent.com/exC3ZjZflozO9_1VzQYGcIduwd32XEHKtLFnY0FGMLzwKZulqm1mS4Ag7wlNTfC_er4r9i8Qxu414QjWUqCvc8Cd8P1jqjo--bSDNrk256cPSMWC-DQMDxrQuKhXP1oypgLevNZpyQc-Hi4yhzcrYAUW9cT8KR1DiwURtKDykYmJzxhz5rCj1aM7bUao4FsxuvSfzVz0v4kzPsTfjStLMfUQcgnJnwta2_SMB02ZAhlXp_wt82YmA6soI4S8dqcRyDbiw7bt_zCybopvKEPlvESh0tZkyWte5GkBidYvhsMidMAwdFydrU6S-mp58bST9iunugiRY1qqkEfGxWDEauB_tTiakUWhFJluwFv3ZNMMWdx3aNEToVpKCIGEOmnljXpR-FfYpOV5zKbg9-KMDsmoU7CZk0Vl7bnVQYfa5Nv3PMSIUBAwtTRZ4hqPoj6bANNwgxExNVFtrS3KeNZSl5wjjGRgw4rcTtVTo175Jlx60ZkzhGzJYfVnHkLKkSOiQ9YOTAuvDt_Vzomxmi0-opaU6nHOYWTuohqlDnEx8nO_qQ_SDVs4kVZvYhr5gD4Dw8rDZShY1G5O5rQ8NBbgsy4yw7s7yCIi0QuvS9Q=w2200-h1650-no' },
      // ],
    };
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
