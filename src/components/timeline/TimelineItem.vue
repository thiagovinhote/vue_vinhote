<template>
  <div class="timeline-item">
    <div class="timeline-marker" :class="color"></div>
    <div class="timeline-content">
      <p class="heading">{{ title }}</p>
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'is-primary',
    },
  },
};
</script>
