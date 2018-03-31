<template>
  <div>
    <div v-if="isLoading" class="columns">
      <div class="column">
        <VclFacebook />
      </div>
      <div class="column">
        <VclFacebook />
      </div>
      <div class="column">
        <VclFacebook />
      </div>
    </div>

    <swiper v-if="!isLoading" :options="swiperOption">
      <swiper-slide
        v-for="(u, index) in user.results"
        :key="index"
      >
        <Message color="is-light">
          <MediaObject
            :imageurl="u.avatar"
            imagesize="is-64x64"
          >
            <span slot="header">
              <strong> {{ u.first_name }} {{ u.last_name }}</strong><br>
              <small>{{ u.email }}</small>
            </span>
            <span slot="text">
              <p><strong>{{ u.role }}</strong></p>
              <!-- <small class="tag is-white">{{ toFormat(c.date_conclusion) }}</small> -->
            </span>
          </MediaObject>
        </Message>
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { VclFacebook } from 'vue-content-loading';
import { MediaObject } from '@/components/media-object';
import Message from '@/components/Message';

export default {
  components: {
    MediaObject,
    Message,
    VclFacebook,
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
        spaceBetween: 30,
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
      isLoading: 'user/IS_LOADING',
    }),
  },
};
</script>

<style></style>
