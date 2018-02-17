<template>
  <div>
    <Hero
      title="Projetos"
      subtitle="Meus projetos"
      color="is-danger"
    />
    <section class="section">
      <div class="container">
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
        <div class="columns is-multiline">
          <div class="column is-half" v-for="(p, index) of project.results" :key="index">
            <MediaObject
              imagesize='is-64x64'
              :imageurl="p.image"
            >
              <span slot="header">
                <strong>{{ p.name }}</strong>
                <!-- <small>@johnsmith</small> <small>31m</small> -->
              </span>

              <!-- v-linkified:options="options" -->
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

import Hero from '@/components/Hero';
import TileGrid from '@/components/TileGrid';
import { MediaObject, MediaNav } from '@/components/media-object';

export default {
  components: {
    Hero,
    TileGrid,
    MediaObject,
    MediaNav,
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
  },
};
</script>

<style></style>
