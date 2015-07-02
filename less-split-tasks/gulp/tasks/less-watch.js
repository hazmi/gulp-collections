"use strict";

var gulp    = require('gulp'),
    less    = require('gulp-watch'),
    config  = require('../config').less;

gulp.task('less-watch', function() {
  gulp.watch(config.watch , ['less']);
});