<template>
  <div class="timeline" :class="order">
    <!-- <div class="timeline-item is-danger">
      <div class="timeline-marker is-danger is-icon">
        <i class="fa fa-flag"></i>
      </div>
      <div class="timeline-content">
        <p class="heading">March 2017</p>
        <p>Timeline content - Can include any HTML element</p>
      </div>
    </div>
    <div class="timeline-item is-warning">
      <div class="timeline-marker is-warning is-image is-32x32">
        <img src="http://bulma.io/images/placeholders/32x32.png">
      </div>
      <div class="timeline-content">
        <p class="heading">February 2016</p>
        <p>Timeline content - Can include any HTML element</p>
      </div>
    </div> -->
    
    <Item v-for="item of experiences" :title="toFormat(item.from_date)">
      <p slot="content">
        <strong>{{ item.company }}</strong>
        <br/>
        {{ item.role}}
      </p>
    </Item>
  </div>
</template>

<script>
import * as _ from 'lodash';
import moment from 'moment';

import TimelineItem from './TimelineItem';

moment.locale('pt-BR');

export default {
  props: {
    order: {
      type: String,
      // options: is-centered, is-rtl
      default: '',
    },
    experiences: {
      type: Array,
      required: true,
    },
  },

  components: {
    Item: TimelineItem,
  },

  methods: {
    toData() {
      const { experiences } = this;
      const data = {};
      _.each(experiences, (i) => {
        const year = this.getYear(i['from_date']);

        if (data[year] === undefined) {
          data[year] = [];
        }
        data[year].push(i);
      });

      const values = [];

      _.each(data, (value, key) => {
        values.push({ type: 'header', value: key });
        _.each(value, (d) => {
          values.push({ type: 'item', value: d });
        });
      });

      return values;
    },

    getYear(dateString) {
      const formattedDate = moment(dateString).format('YYYY');
      return formattedDate;
    },

    toFormat(dateString) {
      const formattedDate = moment(dateString).format('MMMM - YYYY');
      return formattedDate;
    },
  },

  computed: {
    data() {
      return this.toData();
    },
  },
};
</script>

<style></style>
