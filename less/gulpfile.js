
var gulp       = require('gulp');
var less       = require('gulp-less');
var watch      = require('gulp-watch');

gulp.task('compile-less', function() {
  gulp.src('./assets/src/main.less')
    .pipe(less())
    .pipe(gulp.dest('./assets/dist/'));
});

gulp.task('watch-less', function() {
  gulp.watch( './assets/src/**/*.less' , ['compile-less']);
});

gulp.task('default', ['compile-less', 'watch-less']);