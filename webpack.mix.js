let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

//mix.pug = require('laravel-mix-pug');

mix.webpackConfig({
  resolve: {
    alias: {
      '@': path.resolve('resources/assets/sass')
    }
  },
  watchOptions: {
    ignored: [/node_modules/,/vendor/,/storage/,/database/,/bootstrap/]
  }
} || cb);

mix.js('resources/assets/js/app.js', 'public/js')
  .sass('resources/assets/sass/app.scss', 'public/css') ;
