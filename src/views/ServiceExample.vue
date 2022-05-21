<template>
  <div class="text-center">
    <h1>Service Example Page</h1>
    <p>Please check out its view at `views/ServiceExample.vue`</p>
    <p>Please check out its service at `service/complex-module.service`</p>
    <div class="my-4">
      Run <span class="font-weight-bold bg-primary">printFunction1Wrapper()</span>
      <p>Result: {{ printFunction1Wrapper() }}</p>
    </div>
  </div>
</template>

<script>
// Service
// To import all functions in the service with the rename module `ComplexModuleService`
import * as CompleteModuleService from '@/service/complex-module.service';
// To import selected function only
import { printFunction2 } from '@/service/complex-module.service';

export default {
  name: 'ServiceExample',

  mounted() {
    console.log('Calling function1 from renamed module');
    CompleteModuleService.printFunction1();
    console.log('Calling printFunction2 directly');
    printFunction2();
  },

  methods: {
    /**
     * To use imported functions in `<template>` or here with prefix `this.`,
     * a method is required to wrap it
     *
     * IMPORTANT:
     * It is always recommended to separate business logic and UI logic during development.
     * Hence when logic is related to UI it is written in `.vue` files,
     * while business logic that are not UI dependent will be written in `.js` files
     * and organized under folder `service`.
     *
     * And if UI component require some business logic, they can always do import
     * or wrap then in methods like example below.
     */
    printFunction1Wrapper() {
      return CompleteModuleService.printFunction1();
    },
  },

};
</script>
