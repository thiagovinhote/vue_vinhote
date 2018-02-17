<template>
  <nav class="level is-mobile">
    <div class="level-left">
      <a
        v-for="(link, index) of links"
        :key="index"
        class="level-item"
        :href="link.url"
        target="__blank"
      >
        <span class="icon is-small">
          <i :class="classLink(link.type_display)"></i>
        </span>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },

  methods: {
    classLink(type) {
      switch (type) {
        case 'TWITTER':
          return ['fab fa-twitter', 'has-text-primary'];
        case 'MEDIUM':
          return ['fab fa-medium', 'has-text-danger'];
        case 'LINKEDIN':
          return ['fab fa-linkedin', 'has-text-success'];
        case 'GITHUB':
          return ['fab fa-github', 'has-text-dark'];
        case 'FACEBOOK':
          return ['fab fa-facebook', 'has-text-info'];
        case 'SITE':
          return ['fas fa-eye', 'has-text-info'];
        case 'HEROKU':
          return ['fas fa-anchor', 'has-text-primary'];
        default:
          return ['fas fa-link'];
      }
    },
  },
};
</script>

<style>
</style>
