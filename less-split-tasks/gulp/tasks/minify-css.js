"use strict";

var gulp    = require('gulp'),
    minify  = require('gulp-minify-css'),
    rename  = require('gulp-rename'),
    config  = require('../config').minify,
    header  = require('../utils/banner').header;

gulp.task('minify-css', function() {
  return gulp.src(config.src)
    .pipe(minify())
    .pipe(header())
    .pipe(rename(config.minifyName))
    .pipe(gulp.dest(config.dest));
});