"use strict";

var pkg = require('../package.json'),
    header  = require('gulp-header');

module.exports = {
  less: {
    src: './assets/src/main.less',
    watch: './assets/src/**/*.less',
    dest: './assets/dist/'
  },
  minify: {
    src: './assets/dist/main.css',
    minifyName: 'main.min.css',
    dest: './assets/dist/'
  }
}