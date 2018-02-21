<template>
  <div>
    <Hero
      title="Projetos"
      subtitle="Os projetos desenvolvidos por mim"
      color="is-danger"
    />
    <section class="section">
      <div class="container">
        <h1 class="title">Públicos</h1>
        <h2 class="subtitle">Os projetos dessa lista estão disponíveis no Github</h2>

        <div class="columns">
          <div class="column">
            <b-pagination
                :total="project.count"
                :current.sync="pagination.current"
                :order="pagination.order"
                :size="pagination.size"
                :per-page="pagination.perPage"
                @change="changePagination"
              >
            </b-pagination>
          </div>
        </div>

        <div v-if="projectsEmpty" class="columns is-multiline">
          <div v-for="(number, index) of contentLoadingNumber" class="column is-half" :key="index">
            <VclFacebook />
          </div>
        </div>

        <div v-if="!projectsEmpty" class="columns is-multiline">
          <div class="column is-half" v-for="(p, index) of project.results" :key="index">
            <MediaObject
              imagesize='is-64x64'
              :imageurl="p.image"
            >
              <span slot="header">
                <strong>{{ p.name }}</strong>
              </span>
              <span slot="text" v-linkified:options="options" v-html="p.description">
              </span>
              <MediaNav
                slot="links"
                :links="p.links"
              />
            </MediaObject>
          </div>
        </div>

        <h1 class="title">Na Loja</h1>
        <h2 class="subtitle">Esses aqui você pode baixar direto da loja</h2>
        <TileGrid />
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { VclFacebook } from 'vue-content-loading';
import * as _ from 'lodash';

import Hero from '@/components/Hero';
import TileGrid from '@/components/TileGrid';
import { MediaObject, MediaNav } from '@/components/media-object';

export default {
  components: {
    Hero,
    TileGrid,
    MediaObject,
    MediaNav,

    VclFacebook,
  },

  mounted() {
    this.fetch(1);
  },

  data() {
    return {
      options: { className: 'has-text-info' },
      pagination: {
        current: 1,
        perPage: 4,
        order: 'is-right',
        size: 'is-small',
      },
      contentLoadingNumber: 4,
    };
  },

  methods: {
    ...mapActions({
      fetch: 'FETCH_PROJECT',
    }),
    changePagination(number) {
      this.fetch(number);
    },
  },

  computed: {
    ...mapGetters({
      project: 'GET_PROJECT',
    }),

    projectsEmpty() {
      return _.isEmpty(this.project.results);
    },
  },
};
</script>

<style></style>
