<template>
  <div id="app">
    <NavBar />
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <Footer />
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
    mask-image: radial-gradient(circle at 51% 51%, black 64%, transparent 70%);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
