<template>
  <div class="notification" :class="color">
    <button v-if="close" class="delete"></button>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    close: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'is-primary',
    },
  },
};
</script>

<style></style>
