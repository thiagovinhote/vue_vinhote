<template>
  <div class="hero" :class="[size, color]">
    <div class="hero-body">
      <div class="container" :class="position">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
    },
    color: {
      type: String,
    },
    position: {
      type: String,
    },
  },
};
</script>

<style>
</style>
