var gulp = require('gulp');
var runSequence = require('run-sequence');
var paths = require('../paths');
var tsproject = require( 'tsproject' );
var debug = require('gulp-debug');
var ignore = require('gulp-ignore');
var rename = require('gulp-rename');

function compileTsProject(outputDir, moduleFormat, target) {
    // path to named configuration file provided..
    return tsproject.src( paths.sourceTsConfig, {
          logLevel: 1,
          "compilerOptions": {
            "module": moduleFormat,
            "target": target
          }
        })
        .pipe(ignore.include(/dts[/\\].*/))
        .pipe(rename({dirname: outputDir,}))
        .pipe(gulp.dest(paths.output));
}

gulp.task('build-html-es6', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'es6'));
});

gulp.task('build-es6', ['build-html-es6'], function () {
  return compileTsProject('es6', 'common', 'es6');
});

gulp.task('build-html-commonjs', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'commonjs'));
});

gulp.task('build-commonjs', ['build-html-commonjs'], function () {
  return compileTsProject('commonjs', 'common', 'es5');
});

gulp.task('build-html-amd', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'amd'));
});

gulp.task('build-amd', ['build-html-amd'], function () {
  return compileTsProject('amd', 'amd', 'es5');
});

gulp.task('build-html-system', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build-system', ['build-html-system'], function () {
  return compileTsProject('system', 'system', 'es5');
});

gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['build-es6', 'build-commonjs', 'build-amd', 'build-system'],
    callback
  );
});
