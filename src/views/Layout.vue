<template>
  <div class="layout">
    <header>
      <the-navbar />
    </header>
    <div class="layout__body">
      <router-view />
    </div>
    <footer>
      <the-footer />
    </footer>
  </div>
</template>

<script>
// Components
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'Layout',

  components: {
    TheNavbar,
    TheFooter,
  },
};
</script>
