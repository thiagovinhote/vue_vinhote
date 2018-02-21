<template>
  <div>
    <Hero
      color="is-warning"
      title="Experiências"
      subtitle="Veja onde já trabalhei e quais são minhas habilidades"
    />

    <section class="section">
      <div class="columns">
        <div class="column is-5" v-if="!emptyExperience">
          <h2 class="subtitle has-text-centered">Timeline</h2>
          <Timeline order="is-centered" :experiences="experience.results" />
        </div>
        <div class="column" v-if="!emptySkill">
          <h2 class="subtitle has-text-centered">Competências</h2>

          <!-- <div class="columns">
            <div class="column">
              <Message color="is-info">
                <p>
                  O <strong> conhecimento </strong> se torna mais interessante quando
                  ele é <strong> compartilhado </strong> com as outras pessoas.
                </p>
                <small>@vinhote</small>
              </Message>
            </div>
            <div class="column">
              <Message>
                <p>
                  Todos querem <strong> aprender </strong>, mas poucos são os que se
                  <strong>esforçam</strong> para estudar e expandir seus
                  <strong>horizontes</strong>.
                </p>
                <small>@vinhote</small>
              </Message>
            </div>
          </div> -->

          <div class="columns is-multiline">
            <div class="column is-half" v-for="(s, index) of skill.results" :key="index">
              <MediaObject :imageurl="s.image" imagesize='is-64x64'>
                <span slot="header">
                  <strong>{{ s.name }}</strong>
                  <!-- <small>@johnsmith</small> <small>31m</small> -->
                </span>
                <span slot="text">
                  {{ s.description }}
                </span>
              </MediaObject>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <h1 class="title">Certificados</h1>
        <div class="columns is-multiline">
          <div class="column is-4" v-for="(c, index) of certificate.results" :key="index">
            <Message color="is-warning">
              <div class="columns">
                <div class="column is-2">
                  <span class="icon is-medium">
                    <i class="fas fa-certificate fa-2x"></i>
                  </span>
                </div>
                <div class="column">
                  <MediaObject :isimage="false">
                    <span slot="header">
                      <strong> {{ c.course }}</strong> |
                      <small>{{ c.category }}</small>
                    </span>
                    <span slot="text">
                      <p>{{ c.school }}</p>
                      <small class="tag is-white">{{ toFormat(c.date_conclusion) }}</small>
                    </span>
                  </MediaObject>
                </div>
              </div>
            </Message>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import * as _ from 'lodash';
import moment from 'moment';

import Hero from '@/components/Hero';
import Zone from '@/components/Zone';
import Message from '@/components/Message';
import { MediaObject } from '@/components/media-object';
import Timeline from '@/components/timeline';

export default {
  components: {
    Hero,
    Zone,
    Message,
    MediaObject,
    Timeline,
  },

  mounted() {
    this.fetchExperience();
    this.fetchSkill();
    this.fetchCertificate();
  },

  methods: {
    ...mapActions({
      fetchExperience: 'FETCH_EXPERIENCE',
      fetchSkill: 'FETCH_SKILL',
      fetchCertificate: 'FETCH_CERTIFICATE',
    }),

    toFormat(dateString) {
      const formattedDate = moment(dateString).format('MMMM - YYYY');
      return formattedDate.toUpperCase();
    },
  },

  computed: {
    ...mapGetters({
      experience: 'GET_EXPERIENCE',
      skill: 'GET_SKILL',
      certificate: 'GET_CERTIFICATE',
    }),

    emptyExperience() {
      return _.isEmpty(this.experience);
    },

    emptySkill() {
      return _.isEmpty(this.skill);
    },
  },
};
</script>

<style></style>
