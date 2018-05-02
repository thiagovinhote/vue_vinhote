<template>
  <div id="app">
    <NavBar v-if="!isLanding" />
    <vue-progress-bar></vue-progress-bar>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <Footer v-if="!isLanding" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default {
  name: 'App',

  components: {
    NavBar,
    Footer,
  },

  computed: {
    isLanding() {
      return this.$route.path.includes('landingpages');
    },
  },
};
</script>

<style>
  .is-circle {
    border-radius: 50%;
    object-fit: cover;
    object-position: center right;
  }

  .is-250x250 {
    height: 300px;
    width: 300px;
  }

  .is-mask-circle {
    mask-image: radial-gradient(circle at 51% 51%, black 68%, transparent 70%);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
