<template>
  <swiper :options="swiperOption">
    <swiper-slide
      v-for="(u, index) in user.results"
      :key="index"
    >
      <MediaObject
        :imageurl="u.avatar"
        imagesize="is-64x64"
      >
        <span slot="header">
          <strong> {{ u.first_name }}</strong><br>
          <small>{{ u.email }}</small>
        </span>
        <!-- <span slot="text">
          <p>{{ c.school }}</p>
          <small class="tag is-white">{{ toFormat(c.date_conclusion) }}</small>
        </span> -->
      </MediaObject>
    </swiper-slide>
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
  </swiper>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { MediaObject } from '@/components/media-object';

export default {
  components: {
    MediaObject,
  },

  mounted() {
    this.fetchUser();
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        // spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    };
  },

  methods: {
    ...mapActions({
      fetchUser: 'user/FETCH_USER',
    }),
    callback() {},
  },

  computed: {
    ...mapGetters({
      user: 'user/GET_USERS',
    }),
  },
};
</script>

<style></style>
