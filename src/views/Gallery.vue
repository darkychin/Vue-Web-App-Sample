<template>
  <div class="container gallery">
    <h1 class="text-center">
      Sample Gallery - Lorem Picsum
    </h1>
    <p>This is a sample gallery page by using API provided by Lorem Picsum</p>
    <p>
      You can check them out at
      <b-link
        href="https://picsum.photos/"
        target="_blank"
      >
        here
      </b-link>
      .
    </p>
    <div class="container">
      <div class="row">
        <div
          v-for="item in picsum.list"
          :key="item.id"
          class="col-3"
        >
          <b-link
            target="_blank"
            :href="item.url"
          >
            <b-card
              :title="item.author"
              :img-src="item.download_url"
            />
          </b-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Library
// Bootstrap Vue components tree shacking import
// Reference: https://bootstrap-vue.org/docs/components/navbar#importing-individual-components
import {
  BCard,
  BLink,
} from 'bootstrap-vue';

import PicsumService from '@/service/picsum.service';

/**
 * Lorem Picsum reference: https://picsum.photos/
 *
 * Stop here to plan how to work with Lorem Picsum - 20/11/2021 Darky
 */
export default {
  name: 'PicsumGallery',

  components: {
    BCard,
    BLink,
  },

  data: () => ({
    picsum: {
      // isLoading is suggested set to true because the skeleton will always shows when route into this page.
      // You can try setting isLoading to false to see the hiccup when loading pic sum items.
      isLoading: true,
      list: [],
      settings: {
        limit: 12,
      },
      page: 1,
    },
  }),

  mounted() {
    this.getPicsumList();
  },

  methods: {
    getPicsumList() {
      const { limit } = this.picsum.settings;
      const { page } = this.picsum;

      const params = { limit, page };
      PicsumService.get({ params })
        .then((resp) => {
          this.picsum.list = resp.data;
          console.log('done fetching');
        });
    },
  },
};
</script>
