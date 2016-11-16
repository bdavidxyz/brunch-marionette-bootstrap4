
module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'js/vendor.js': /^(?!app)/,
        'js/app.js': /^app/
      }
    },
    stylesheets: {joinTo: 'app.css'},
    templates: {joinTo: 'app.js'}
  },
  plugins: {
    postcss: {
      processors: [
      require('autoprefixer')(['last 8 versions']),
      require('postcss-flexbugs-fixes')()
      ]
    }
  },
  npm: {
    globals: {
      $: 'jquery',
      _: 'underscore',
      Handlebars: 'handlebars',
      Backbone: 'backbone',
      'Backbone.Radio': 'backbone.radio',
      'Backbone.Marionette': 'backbone.marionette',
    }
  }
};
