<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-vertical">
        <div v-for="(m, mIndex) of matrix" class="tile" :key="mIndex">
          <div v-for="(w, wIndex) of m" class="tile is-parent" :key="wIndex">
            <article class="tile is-child box">
              <div class="content">
                <p class="title">{{ w.name }}</p>
                <!-- <p class="subtitle is-6">
                  <a href="">{{ w.link_store }}</a>
                </p> -->
              </div>
              <figure class="image is-square">
                <img :src="w.image">
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
      fetchWork: 'work/FETCH_WORK',
    }),
    split() {
      const matrix = _.chunk(this.work.results, 3);
      return matrix;
    },
  },

  computed: {
    ...mapGetters({
      work: 'work/GET_WORKS',
    }),
    matrix() {
      return this.split();
    },
  },
};
</script>

<style></style>
