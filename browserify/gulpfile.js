var gulp       = require('gulp');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');

/* Task to do browserify */
gulp.task('browserify', function() {
  return browserify( './assets/src/main.js')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./assets/dist/'));
});

/* Task when running `gulp` from terminal */
gulp.task('default', ['browserify']);