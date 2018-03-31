<template>
  <article class="media">
    <div class="media-left">
      <figure v-if="isimage" class="image circle responsive" :class="imagesize">
        <img :src="imageurl">
      </figure>
    </div>
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
      default: 'is-square',
    },
    imageurl: {
      type: String,
    },
    isimage: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
  .responsive {
    overflow: hidden;
  }

  figure {
    border-radius: 50%;
  }

  img {
    min-height: 100%;
  }

</style>
