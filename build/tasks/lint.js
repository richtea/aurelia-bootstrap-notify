var gulp = require('gulp');
var paths = require('../paths');
const tslint = require('gulp-tslint');
var stylish = require('gulp-tslint-stylish');

gulp.task('lint', function() {
  return gulp.src(paths.source)
    .pipe(tslint())
    .pipe(tslint.report(stylish, {
        emitError: false,
        sort: true,
        bell: true
      }));
});
