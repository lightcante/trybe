module.exports  = {
  build   : 'dist',
  server  : 'server',
  app     : 'src/app',
  data    : 'src/assets/data',
  images  : 'src/assets/images',
  fonts   : 'src/assets/fonts',
  styles  : 'src/assets/styles',
  app_files: {

    // Source excluding test files
    js: [ 'src/app/**/*.js', '!src/app/**/*.spec.js'],

    // Entry page
    html: [ 'src/index.html' ],

    // Module styles
    scss: [ 'src/app/**/*.scss' ]
  },
  vendor_files  : {
    js: [
      'vendor/angular/angular.js',
      'vendor/lodash/dist/lodash.js'
    ],
    css: [
      'vendor/animate.css/animate.min.css'
    ]
  },
  sass_bootstrap_dir : 'vendor/bootstrap-sass-official/assets/stylesheets'
};
