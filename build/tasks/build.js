var gulp = require('gulp');
var runSequence = require('run-sequence');
var paths = require('../paths');
var tsproject = require( 'tsproject' );
var debug = require('gulp-debug');
var ignore = require('gulp-ignore');
var rename = require('gulp-rename');
var tsd = require('gulp-tsd');

function compileTsProject(outputDir, moduleFormat, target) {
    // path to named configuration file provided..
    return tsproject.src( paths.sourceTsConfig, {
          logLevel: 0,
          "compilerOptions": {
            "module": moduleFormat,
            "target": target
          }
        })
        .pipe(rename(function(path) {
          // Output the bundles to the output dir
          path.dirname = path.dirname.replace(/src[\\/]bundle/, outputDir);
          // Redirect the non-bundled transpiled files to a temp location 
          path.dirname = path.dirname.replace(/src/, "temp/" + outputDir);
        }))
        .pipe(gulp.dest(paths.output));
}

gulp.task('tsd', function (callback) {
  return gulp.src('./gulp_tsd.json').pipe(tsd());
});

gulp.task('build-html-es6', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'es6'));
});

gulp.task('build-es6', ['build-html-es6', 'tsd'], function () {
  return compileTsProject('es6', 'commonjs', 'es6');
});

gulp.task('build-html-commonjs', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'commonjs'));
});

gulp.task('build-commonjs', ['build-html-commonjs', 'tsd'], function () {
  return compileTsProject('commonjs', 'commonjs', 'es5');
});

gulp.task('build-html-amd', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'amd'));
});

gulp.task('build-amd', ['build-html-amd', 'tsd'], function () {
  return compileTsProject('amd', 'amd', 'es5');
});

gulp.task('build-html-system', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build-system', ['build-html-system', 'tsd'], function () {
  return compileTsProject('system', 'system', 'es5');
});

gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['build-es6', 'build-commonjs', 'build-amd', 'build-system'],
    callback
  );
});
