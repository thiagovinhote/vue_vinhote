<template>
  <div>
    <Hero
      title="Perfil"
      subtitle="Saiba mais sobre mim"
      color="is-info"
    />

    <Zone
      color="is-danger"
    >
      <div class="columns">
        <div class="column is-half">
          <h1 class="title is-1">Sobre mim</h1>
          <h1 class="title is-4">Eu sou um desenvolvedor</h1>
          <div class="content">
            <p class="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
            <div class="content">
              <a class="button is-dark">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>GitHub</span>
              </a>
              <a class="button is-info">
                <span class="icon">
                  <i class="fab fa-facebook"></i>
                </span>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
        <div class="column is-offset-1 has-text-centered">
          <div class="content">
            <img class="is-mask-circle is-250x250" src="https://scontent.fbsb1-1.fna.fbcdn.net/v/t1.0-9/13095896_933513143414062_1336776631130582505_n.jpg?oh=0e16119681af556b805bdb3b758c3640&oe=5B16B8B4">
          </div>
        </div>
      </div>
    </Zone>

    <Zone
      color="is-dark"
    >
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Tweets</p>
            <p class="title">3,456</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Following</p>
            <p class="title">123</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Followers</p>
            <p class="title">456K</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Likes</p>
            <p class="title">789</p>
          </div>
        </div>
      </nav>
    </Zone>

    <Zone
      color="is-light"
    >
      <h1 class="title">Amigos</h1>
      <hr/>
      <div class="columns is-multiline is-desktop">
        <div v-for="amigo of amigos" class="column is-one-quarter">
          <MediaObject imagesize="is-64x64">
            <h1 slot="header" class="title is-5">
              {{ amigo.name }}
            </h1>
          </MediaObject>
        </div>
      </div>
    </Zone>
  </div>
</template>

<script>
import Hero from '@/components/Hero';
import Zone from '@/components/Zone';
import { MediaObject } from '@/components/media-object';

export default {
  data() {
    return {
      amigos: [
        { name: 'Fulano' },
        { name: 'Cicrano' },
        { name: 'Beltrano' },
        { name: 'Fulano' },
        { name: 'Cicrano' },
        { name: 'Beltrano' },
      ],
    };
  },
  components: {
    Hero,
    Zone,
    MediaObject,
  },
};
</script>

<style>
  .is-circle {
    border-radius: 50%;
    object-fit: cover;
    object-position: center right;
  }

  .is-250x250 {
    height: 300px;
    width: 300px;
  }

  .is-mask-circle {
    /*-webkit-mask-image: radial-gradient(ellipse 90% 80% at 48% 78%, black 40%, transparent 50%);*/
    /*circle at 50% 60%, black 50%, rgba(0, 0, 0, 0.6) 50%*/
    mask-image: radial-gradient(circle at 51% 51%, black 64%, transparent 70%);
  }
</style>
