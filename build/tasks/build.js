var gulp = require('gulp');
var runSequence = require('run-sequence');
var paths = require('../paths');
var debug = require('gulp-debug');
var ignore = require('gulp-ignore');
var rename = require('gulp-rename');
var tsd = require('gulp-tsd');
var ts = require('gulp-typescript');
var merge = require('merge2');
var dtsGenerator = require('dts-generator')

var outputDefFile = paths.output + '/' + paths.pluginName +'.d.ts';

function compileTsProject(outputDir, moduleFormat, target) {
  
  var tsp = ts.createProject(paths.sourceTsConfig, { 
        "module": moduleFormat,
        "target": target
    });

  var tsResult = tsp.src()
      .pipe(ts(tsp));

  var output = paths.output + "/" + outputDir;
  
  // Pipeline to copy the definition file into the output directory
  var copyDef = gulp.src(outputDefFile).pipe(gulp.dest(output));
  
  // // Merge the two output streams, so this task is finished when 
  // // the IO of both operations are done.
  return merge([ 
      copyDef,
      tsResult.js.pipe(gulp.dest(output))
  ]);
}

gulp.task('tsd', function (callback) {
  return gulp.src('./gulp_tsd.json').pipe(tsd());
});

gulp.task('build-html-es6', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'es6'));
});

gulp.task('build-es6', ['build-html-es6', 'tsd', 'dts-gen'], function () {
  return compileTsProject('es6', 'commonjs', 'es6');
});

gulp.task('build-html-commonjs', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'commonjs'));
});

gulp.task('build-commonjs', ['build-html-commonjs', 'tsd', 'dts-gen'], function () {
  return compileTsProject('commonjs', 'commonjs', 'es5');
});

gulp.task('build-html-amd', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'amd'));
});

gulp.task('build-amd', ['build-html-amd', 'tsd', 'dts-gen'], function () {
  return compileTsProject('amd', 'amd', 'es5');
});

gulp.task('build-html-system', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build-system', ['build-html-system', 'tsd', 'dts-gen'], function () {
  return compileTsProject('system', 'system', 'es5');
});

gulp.task('dts-gen', function(callback) {
  dtsGenerator.default({
    name: paths.pluginName,
    project: './src',
    out: outputDefFile,
    main: 'test-plugin/index'
  });
  
  return callback();
});

gulp.task('build', function(callback) {
  return runSequence(
    ['clean', 'tsd'],
    ['build-commonjs', 'build-amd', 'build-system'],
    callback
  );
});
