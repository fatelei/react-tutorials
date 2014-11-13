/**
 * gulp config
 */

var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('runserver', function () {
  gulp.src('src')
    .pipe(server({
      livereload: true,
      log: 'debug'
    }));
});

gulp.task('default', ['runserver']);