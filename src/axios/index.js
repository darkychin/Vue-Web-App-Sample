/**
 * Axios will be main library to be used as a wrapper for AJAX calling.
 * It helps in automatic decoding from JSON during GET action,
 * as well as encoding to JSON during POST/PUT/DELETE actions
 */
import axios from 'axios';

const instance = axios.create({
  /**
   * This is how .env file of VUE_APP_API_URL is used as the base of Axious configuration.
   * Read more here:
   * @see {@link https://cli.vuejs.org/guide/mode-and-env.html#using-env-variables-in-client-side-code env variables}
   */
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

/**
 * Initialize axios API
 *
 * Reference on this design to avoid circular dependency
 * 1. @see {@link https://qiita.com/yo_instead_what/items/df886c6baed88252654c Vuejs | Circular Dependency | Vuex + API + Axios}
 * 2. @see {@link https://www.reddit.com/r/vuejs/comments/foy2nu/vuex_api_service_layer_axios_interceptors/fn30ulf/ Vuex + api service layer + axios interceptors = circular dependencies?}
 *
 * @param {Object} store - Vuex Store
 * @param {Object} router - Vue Router
 */
// eslint-disable-next-line no-unused-vars
function init(store, router) {
  // Interceptors
  instance.interceptors.request.use(
    (config) => {
      const token = store.getters['AUTH/getToken'];
      const updatedConfig = config;

      if (token) {
        updatedConfig.headers.common.Authorization = `Bearer ${token}`;
      }
      return updatedConfig;
    },
  );

  instance.interceptors.response.use(
    (res) => (Promise.resolve(res)),
    (err) =>
    /**
     * Lines below are Axios global interceptor settings.
     * If you want to handle certain situation globally,
     * you can do it at here.
     * For example:
     * 1. Global 'get' response formatting
     * 2. Global HTTP error handling
     */

    // ==== Sample Code Start ====
    // const { status } = err.response;

    // if (status === 401) {
    //   store.dispatch('AUTH/handleTokenMismatch');
    // } else if (status === 403) {
    //   /**
    //    * @prop {Number} errCode
    //    * - 1 : Restricted access
    //    * - 2 : Ban
    //    */
    //   // const { error_code: errCode = null } = err.response.data.data;

    //   // if (errCode === 2) {
    //   //   store.dispatch('MODAL/openModalBan');
    //   // }
    // } else if (status === 500) {
    //   router.push({ name: 'InternalServerError' });
    // }

      /**
       * This is a promise shorthand
       */
      // eslint-disable-next-line implicit-arrow-linebreak
      Promise.reject(err),
  );
}

export {
  instance as axios,
  init as axiosInit,
};
