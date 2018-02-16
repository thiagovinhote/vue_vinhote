<template>
  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <slot name="swiper-slide" />
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  props: {
    perview: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: this.perview,
        loop: true,
        autoplay: {
          delay: 3500,
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
    callback() {},
  },
};
</script>

<style></style>
