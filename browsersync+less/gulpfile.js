var gulp        = require('gulp');
var less        = require('gulp-less');
var watch       = require('gulp-watch');
var minifyCSS   = require('gulp-minify-css');
var rename      = require('gulp-rename');
var header      = require('gulp-header');
var browserSync = require('browser-sync').create();
var pkg         = require('./package.json');

/* Prepare banner text */
var banner = ['/**',
  ' * <%= pkg.name %> v<%= pkg.version %>',
  ' * <%= pkg.description %>',
  ' * <%= pkg.author.name %> <<%= pkg.author.email %>>',
  ' */',
  ''].join('\n');

var onError = function (e) {
  console.log(e);
};

/* Task to compile less */
gulp.task('compile-less', function() {
  return gulp.src('./assets/src/main.less')
    .pipe(less().on('error', onError))
    .pipe(header(banner, {pkg: pkg}))
    .pipe(gulp.dest('./assets/dist/'))
    .pipe(browserSync.stream());
});

/* Task to watch less changes */
gulp.task('watch-less', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch('./assets/src/**/*.less' , ['compile-less']);
});

/* Task to minify css */
gulp.task('minify-css', function() {
  return gulp.src('./assets/dist/main.css')
    .pipe(minifyCSS())
    .pipe(header(banner, {pkg: pkg}))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest( './assets/dist/' ));
});

/* Task when running `gulp` from terminal */
gulp.task('default', ['compile-less', 'watch-less']);

/* Task when running `gulp build` from terminal */
gulp.task('build', ['minify-css']);