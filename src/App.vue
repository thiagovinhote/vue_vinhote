<template>
  <div id="app">
    <NavBar />
    <transition name="fade"  mode="out-in">
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
  .fade-enter-active, .component-fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter, .component-fade-leave-to {
    opacity: 0;
  }
</style>
