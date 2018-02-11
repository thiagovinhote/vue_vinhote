<template>
  <section class="hero" :class="[size, color]">
    <div class="hero-body">
      <div class="container" :class="position">
        <slot />
        <h1 class="title is-4">{{ title }}</h1>
        <h2 class="subtitle">{{ subtitle }}</h2>
      </div>
    </div>
  </section>
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
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
