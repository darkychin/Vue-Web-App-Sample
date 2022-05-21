<template>
  <b-navbar
    fixed="top"
    variant="primary"
    type="light"
    toggleable="sm"
  >
    <b-navbar-brand :to="{ name: 'Landing' }">
      <span class="font-weight-bold">VWAS</span>
    </b-navbar-brand>

    <b-navbar-toggle target="navSidebar" />

    <b-collapse
      id="navSidebar"
      is-nav
    >
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'Landing' }">
          Home
        </b-nav-item>
        <b-nav-item :to="{ name: 'Gallery' }">
          Gallery
        </b-nav-item>
        <b-nav-item :to="{ name: 'ServiceExample' }">
          Gallery
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
// Library
/**
 * Bootstrap Vue components tree shaking import
 * Reference:
 * @see {@link https://bootstrap-vue.org/docs/components/navbar#importing-individual-components boostrap-vue}
 */
import {
  BCollapse, BNavbar, BNavbarNav, BNavbarBrand, BNavbarToggle, BNavItem,
} from 'bootstrap-vue';

export default {
  /**
   * Since one app can only have one header navbar, hence the name is prepend with word 'The'
   * Reference:
   * @see {@link https://vuejs.org/v2/style-guide/#Single-instance-component-names-strongly-recommended naming guide}
   */
  name: 'TheNavbar',

  /**
   * Components name in Pascal Case will be auto converted into kebab-case, so you can import them as it is.
   * Reference:
   * 1. https://vuejs.org/v2/style-guide/#Component-name-casing-in-JS-JSX-strongly-recommended
   * 2. https://stackoverflow.com/a/49873960/7939633
   *
   * If you want to force it to use another DOM tag, you can do it like this:
   * @example
   * {
   * 'the-new-component-name': TheOriginalComponentName,
   * ...
   * }
   */
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
