<template>
  <div>
    <Hero
      title="Projetos"
      subtitle="Meus projetos"
      color="is-danger"
    />
    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-half">
            <MediaObject imagesize='is-64x64'>
              <span slot="header">
                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
              </span>
              <span slot="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              </span>
            </MediaObject>
          </div>
          <div class="column is-half">
            <MediaObject imagesize='is-64x64'>
              <span slot="header">
                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
              </span>
              <span slot="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              </span>
            </MediaObject>
          </div>
        </div>

        <h1 class="title">Na Loja</h1>
        <h2 class="subtitle">Esses aqui você pode baixar direto da loja</h2>

        <div class="tile is-ancestor">
          <div class="tile is-vertical is-9">
            <div class="tile">
              <div class="tile is-vertical">
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">Five</p>
                    <p class="subtitle">Subtitle</p>
                    <figure class="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/640x480.png">
                    </figure>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">Five</p>
                    <p class="subtitle">Subtitle</p>
                    <figure class="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/640x480.png">
                    </figure>
                  </article>
                </div>
              </div>
              <div class="tile is-8 is-vertical">
                <div class="tile">
                  <div class="tile is-parent">
                    <article class="tile is-child box">
                      <p class="title">Six</p>
                      <p class="subtitle">Subtitle</p>
                    </article>
                  </div>
                  <div class="tile is-parent">
                    <article class="tile is-child box">
                      <p class="title">Seven</p>
                      <p class="subtitle">Subtitle</p>
                    </article>
                  </div>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">Eight</p>
                    <p class="subtitle">Subtitle</p>
                  </article>
                </div>
              </div>
            </div>
            <div class="tile">
              <div class="tile is-8 is-parent">
                <article class="tile is-child box">
                  <p class="title">Nine</p>
                  <p class="subtitle">Subtitle</p>
                  <div class="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                  </div>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">Ten</p>
                  <p class="subtitle">Subtitle</p>
                  <div class="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <div class="content">
                <p class="title">Eleven</p>
                <p class="subtitle">Subtitle</p>
                <div class="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                  <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Twelve</p>
              <p class="subtitle">Subtitle</p>
              <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.</p>
              </div>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Fourteen</p>
              <p class="subtitle">Subtitle</p>
              <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.</p>
              </div>
            </article>
          </div>
          <div class="tile is-parent is-6">
            <article class="tile is-child box">
              <p class="title">Thirteen</p>
              <p class="subtitle">Subtitle</p>
              <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from '@/components/Hero';
import { MediaObject } from '@/components/media-object';

export default {
  components: {
    Hero,
    MediaObject,
  },
};
</script>

<style></style>
