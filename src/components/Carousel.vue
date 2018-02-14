<template>
  <div>
    <div class="columns is-multiline">
      <div class="column is-4" v-for="item of work.results">
        <div class="card">
          <div class="card-image">
            <figure class="image is-3by2">
              <img :src="item.image" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              {{ item.description }}
              <!-- <a href="#">#{{ item.name }}</a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div v-if="projects.length > 0">
    <div class='carousel is-3 carousel-animated carousel-animate-slide'>
      <div class='carousel-container'>
        <div v-for="item of projects" class='carousel-item' :class="[item.active ? 'is-active' : '']">
          <div class="card">
            <div class="card-image">
              <figure class="image is-3by2">
                <img :src="item.image" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                {{ item.description }}
                <a href="#">#{{ item.name }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-navigation is-overlay">
        <div class="carousel-nav-left">
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </div>
        <div class="carousel-nav-right">
          <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  mounted() {
    this.fetch();
  },

  methods: {
    ...mapActions({
      fetch: 'FETCH_WORK',
    }),
  },

  computed: {
    ...mapGetters({
      work: 'GET_WORK',
    }),
  },
};
</script>

<style></style>
