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
              <Message>
                Primar lorem ipsum dolor sit amet, consectetur
                adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
              </Message>
            </div>
            <div class="column">
              <Message>
                Primar lorem ipsum dolor sit amet, consectetur
                adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
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
