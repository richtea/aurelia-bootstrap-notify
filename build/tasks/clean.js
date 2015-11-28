var gulp = require('gulp');
var paths = require('../paths');
var del = require('del');
var vinylPaths = require('vinyl-paths');

gulp.task('clean', function(callback) {
  return gulp.src('dist/*')
    .pipe(vinylPaths(del));
});
