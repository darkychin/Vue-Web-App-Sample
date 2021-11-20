<template>
  <div>
    <div class="container">
      <div class="h6 text-center py-3">
        Interested to see more?
      </div>
    </div>
    <div class="bg-secondary">
      <div class="container">
        <b-row>
          <b-col>
            <div class="font-weight-bold">
              Contact
            </div>
            <b-link
              href="https://github.com/darkychin"
            >
              Github
            </b-link>
          </b-col>
          <b-col>
            <div class="font-weight-bold">
              Project
            </div>
            <b-link
              href="https://darkychin.github.io/Barbell-Lifts-Classification/"
            >
              Barbell-Lifts-Classification
            </b-link>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
// Library
// Bootstrap Vue components tree shacking import
// Reference: https://bootstrap-vue.org/docs/components/navbar#importing-individual-components
import {
  BCol,
  BLink,
  BRow,
} from 'bootstrap-vue';

export default {
  // Since one app can only have one footer, hence the name is prepend with word 'The'
  name: 'TheFooter',

  components: {
    BCol,
    BLink,
    BRow,
  },
};
</script>
