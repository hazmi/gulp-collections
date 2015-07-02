"use strict";

var gulp    = require('gulp'),
    less    = require('gulp-less'),
    config  = require('../config').less,
    header  = require('../utils/banner').header;

gulp.task('less', function() {
  return gulp.src(config.src)
    .pipe(less())
    .pipe(header())
    .pipe(gulp.dest(config.dest));
});