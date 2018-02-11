<template>
  <article class="media">
    <figure class="media-left">
      <p class="image" :class="imagesize">
        <img src="https://bulma.io/images/placeholders/128x128.png">
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
      <!-- <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-reply"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-retweet"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-heart"></i></span>
          </a>
        </div>
      </nav> -->
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
  },
};
</script>

<style></style>
