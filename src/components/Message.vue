<template>
  <div class="notification is-link">
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
  },
};
</script>

<style></style>
