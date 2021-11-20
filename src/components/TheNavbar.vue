<template>
  <b-navbar
    fixed="top"
    variant="primary"
    type="light"
    toggleable="sm"
  >
    <b-navbar-brand :to="{ name: 'Landing'}">
      <span class="font-weight-bold">VWAS</span>
    </b-navbar-brand>

    <b-navbar-toggle target="navSidebar" />

    <b-collapse
      id="navSidebar"
      is-nav
    >
      <b-navbar-nav>
        <b-nav-item
          :to="{ name: 'Landing' }"
        >
          HOME
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
// Library
// Bootstrap Vue components tree shacking import
// Reference: https://bootstrap-vue.org/docs/components/navbar#importing-individual-components
import {
  BCollapse,
  BNavbar,
  BNavbarNav,
  BNavbarBrand,
  BNavbarToggle,
  BNavItem,
} from 'bootstrap-vue';

export default {
  // Since one app can only have one header navbar, hence the name is prepend with word 'The'
  name: 'TheNavbar',

  components: {
    BCollapse,
    BNavbar,
    BNavbarNav,
    BNavbarBrand,
    BNavbarToggle,
    BNavItem,
  },
};
</script>
