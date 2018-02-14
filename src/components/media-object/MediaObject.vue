<template>
  <article class="media">
    <figure class="media-left">
      <p class="image" :class="imagesize">
        <img :src="imageurl">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <div>
          <slot name="header" />
          <br/>
          <slot name="text" />
        </div>
      </div>
      <slot name="links"/>
    </div>
    <!-- <div class="media-right">
      <button class="delete"></button>
    </div> -->
  </article>
</template>

<script>
export default {
  props: {
    imagesize: {
      type: String,
      default: 'is-128x128',
    },
    imageurl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
