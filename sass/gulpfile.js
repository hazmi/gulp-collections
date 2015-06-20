var gulp       = require('gulp');
var sass       = require('gulp-sass');
var watch      = require('gulp-watch');
var minifyCSS  = require('gulp-minify-css');
var rename     = require('gulp-rename');
var header     = require('gulp-header');
var pkg        = require('./package.json');

/* Prepare banner text */
var banner = ['/**',
  ' * <%= pkg.name %> v<%= pkg.version %>',
  ' * <%= pkg.description %>',
  ' * <%= pkg.author.name %> <<%= pkg.author.email %>>',
  ' */',
  ''].join('\n');

/* Task to compile sass */
gulp.task('compile-sass', function() {
  return gulp.src('./assets/src/main.scss')
    .pipe(sass())
    .pipe(header(banner, {pkg: pkg}))
    .pipe(gulp.dest('./assets/dist/'));
});

/* Task to watch sass changes */
gulp.task('watch-sass', function() {
  gulp.watch('./assets/src/**/*.scss' , ['compile-sass']);
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
gulp.task('default', ['compile-sass', 'watch-sass']);

/* Task when running `gulp build` from terminal */
gulp.task('build', ['minify-css']);