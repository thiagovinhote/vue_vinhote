<template>
  <div>
    <Hero
      color="is-warning"
      title="Experiências"
      subtitle="Timeline"
    />

    <section class="section">
      <div class="columns">
        <div class="column is-6">
          <Timeline />
        </div>
        <div class="column">
          <div class="columns">
            <div class="column">
              <Message color="is-info">
                <p>
                  O <strong>conhecimento</strong> se torna mais interessante quando ele é <strong>compartilhado</strong> com as outras pessoas.
                </p>
                <small>@vinhote</small>
              </Message>
            </div>
            <div class="column">
              <Message>
                <p>
                  Todos querem <strong>aprender</strong>, mas poucos são os que se <strong>esforçam</strong> para estudar e expandir seus <strong>horizontes</strong>.
                </p>
                <small>@vinhote</small>
              </Message>
            </div>
          </div>

          <MediaObject imagesize='is-64x64'>
            <span slot="header">
              <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
            </span>
            <span slot="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </span>
          </MediaObject>
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
    </section>
  </div>
</template>

<script>
import Hero from '@/components/Hero';
import Message from '@/components/Message';
import { MediaObject } from '@/components/media-object';
import Timeline from '@/components/Timeline';

export default {
  components: {
    Hero,
    Message,
    MediaObject,
    Timeline,
  },
};
</script>

<style></style>
