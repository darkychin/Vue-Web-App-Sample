/**
 * Vue configuration file
 */

/* eslint-disable no-param-reassign */
module.exports = {
  /**
   * This is how .env file of VUE_APP_BASE_URL is used as file serving configuration.
   */
  publicPath: process.env.BASE_URL,

  // Uncomment below to serve the current web app as 'https' during development
  // devServer: { https: true },

  // Setting below hide souce map for web app in production
  // Reference: https://stackoverflow.com/questions/51482940/how-can-i-disable-source-maps-in-production-for-a-vue-js-app
  productionSourceMap: false,

  /**
   * Following configuration is used to modify "src" property for bootstrap vue components
   * Reference: https://bootstrap-vue.org/docs/reference/images
   */
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        options.transformAssetUrls = {
          img: 'src',
          image: 'xlink:href',
          'b-avatar': 'src',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'src',
          'b-card-img-lazy': ['src', 'blank-src'],
          'b-carousel-slide': 'img-src',
          'b-embed': 'src',
        };

        return options;
      });
  },
};

/**
 * Tips on reducing bundle size:
 * Reference: https://stackoverflow.com/questions/56059883/how-to-reduce-bundle-size-in-webpack-vuejs
 */
