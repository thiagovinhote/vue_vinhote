<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-vertical">
        <div v-for="m of matrix" class="tile">
          <div v-for="w of m" class="tile is-parent">
            <article class="tile is-child box">
              <div class="content">
                <p class="title">{{ w.name }}</p>
                <!-- <p class="subtitle is-6">
                  <a href="">{{ w.link_store }}</a>
                </p> -->
              </div>
              <figure class="image is-square">
                <img :src.native="w.image">
              </figure>
              <br/>
              <div class="content">
                <p>{{ w.description }}</p>
              </div>
              <a class="tags has-addons" :href="w.link_store" target="__blank">
                <span class="tag">Loja</span>
                <span class="tag is-info">AppStore</span>
              </a>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as _ from 'lodash';
import { mapGetters, mapActions } from 'vuex';

export default {
  mounted() {
    this.fetchWork(true);
  },

  methods: {
    ...mapActions({
      fetchWork: 'FETCH_WORK',
    }),
    split() {
      const matrix = _.chunk(this.work.results, 3);
      return matrix;
    },
  },

  computed: {
    ...mapGetters({
      work: 'GET_WORK',
    }),
    matrix() {
      return this.split();
    },
  },
};
</script>

<style></style>
