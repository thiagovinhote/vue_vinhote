<template>
  <div class='carousel is-3 carousel-animated carousel-animate-slide'>
    <div class='carousel-container'>
      <div v-for="item of itens" class='carousel-item' :class="[item.active ? 'is-active' : '']">
        <div class="card">
          <div class="card-image">
            <figure class="image is-3by2">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. <a>@bulmaio</a>.
              <a href="#">#css</a> <a href="#">#responsive</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-navigation is-overlay">
      <div class="carousel-nav-left">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
      <div class="carousel-nav-right">
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itens: [
        { image_url: 'https://bulma.io/images/placeholders/480x480.png', active: true },
        { image_url: 'https://bulma.io/images/placeholders/480x480.png', active: false },
        { image_url: 'https://bulma.io/images/placeholders/480x480.png', active: false },
        { image_url: 'https://bulma.io/images/placeholders/480x480.png', active: false },
        { image_url: 'https://bulma.io/images/placeholders/480x480.png', active: false },
        { image_url: 'https://bulma.io/images/placeholders/480x480.png', active: false },
        { image_url: 'https://bulma.io/images/placeholders/480x480.png', active: false },
        { image_url: 'https://bulma.io/images/placeholders/480x480.png', active: false },
        { image_url: 'https://bulma.io/images/placeholders/480x480.png', active: false },
      ],
    };
  },
};
</script>

<style></style>
